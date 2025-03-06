
async function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cartContainer');
    const cartSidebarContent = document.getElementById('cartSidebarContent');
    cartContainer.innerHTML = '';
    cartSidebarContent.innerHTML = '';

    updateCartCount(); // Update cart count in icon

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty</p>';
        cartSidebarContent.innerHTML = '<p>Your cart is empty</p>';
        updateCartTotal(0); // Set total to 0 when cart is empty
        return;
    }

    let updatedCart = [];
    let cartHTML = ''; // For main cart
    let cartSidebarHTML = ''; // For sidebar
    let totalPrice = 0; // Single variable for total price

    for (const productId of cart) {
        try {
            const response = await fetch(`http://localhost:5000/api/products/${productId}`);
            if (!response.ok) {
                console.warn(`Product not found (ID: ${productId}), removing from cart.`);
                continue;
            }

            const product = await response.json();
            updatedCart.push(productId);
            totalPrice += product.price; // Add to total once

            const itemHTML = `
                <div class="cart-item">
                    <img src="http://localhost:5000${product.imageUrl}" alt="${product.name}" />
                    <div class="cart-item-details">
                        <h3>${product.name}</h3>
                        <p class="price">£${product.price.toFixed(2)}</p>
                    </div>
                    <button onclick="removeFromCart('${productId}')">Remove</button>
                </div>
            `;

            cartHTML += itemHTML; // Add to cart page
            cartSidebarHTML += itemHTML; // Add to sidebar (same structure)

        } catch (error) {
            console.error(`Error fetching product: ${error.message}`);
        }
    }

    cartContainer.innerHTML = cartHTML;
    cartSidebarContent.innerHTML = cartSidebarHTML;
    updateCartTotal(totalPrice); // Update total once

    localStorage.setItem('cart', JSON.stringify(updatedCart));
}

// ✅ Single function to update total price in both cart and sidebar
function updateCartTotal(total) {
    document.getElementById('cartTotal').textContent = total.toFixed(2);
    document.getElementById('sidebarCartTotal').textContent = total.toFixed(2);
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.getElementById('cartCount').textContent = cart.length;
    document.getElementById('cartCount').textContent = 'Shopping Cart';
}


function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter((id) => id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}



// Checkout function
async function checkout() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    if (!token || !userId) {
        alert('Please log in to proceed with checkout.');
        window.location.href = './login.html';
        return;
    }

    if (!cart.length) {
        alert('Cart is empty. Add items to cart before checkout.');
        return;
    }

    try {
        const response = await fetch('http://localhost:5000/api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ userId, products: cart }),
        });

        if (response.ok) {
            const order = await response.json();
            localStorage.setItem('currentOrder', JSON.stringify(order));
            localStorage.removeItem('cart');
            showAlert('Order placed successfully');

            setTimeout(() => {
                window.location.href = './orders.html';
            }, 2000); // Redirect after 2 seconds
        } else {
            const data = await response.json();
            alert(data.message || 'Checkout failed!');
        }
    } catch (error) {
        console.error('Error during checkout:', error);
    }
}

function showAlert(message) {
    document.getElementById('alertMessage').textContent = message;
    document.getElementById('customAlert').style.display = 'block';

    setTimeout(() => {
        document.getElementById('customAlert').style.display = 'none';
    }, 3000);
}

function closeAlert() {
    document.getElementById('customAlert').style.display = 'none';
}

// Cart Sidebar Toggle
document.getElementById('cartIcon').addEventListener('click', () => {
    document.getElementById('cartSidebar').classList.add('open');
});

document.getElementById('closeCart').addEventListener('click', () => {
    document.getElementById('cartSidebar').classList.remove('open');
});

document.getElementById('checkoutFromSidebar').addEventListener('click', checkout);

// Initialise cart on page load 
document.addEventListener('DOMContentLoaded', displayCart);
document.getElementById('checkoutButton').addEventListener('click', checkout);



