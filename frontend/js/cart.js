
async function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cartContainer');
    cartContainer.innerHTML = '';

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty</p>';
        return;
    }

    for (const productId of cart) {
        try {
            const response = await fetch(`http://localhost:5000/api/products/${productId}`);
            if (!response.ok) {
                throw new Error(`Product not found: ${productId}`);
            }
            const product = await response.json();

            const cartItem = `
                <div class="cart-item">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p>Price: £${product.price}</p>
                    <button onclick="removeFromCart('${productId}')">Remove</button>
                </div>
            `;

            cartContainer.innerHTML += cartItem;
        } catch (error) {
            console.error(`Error fetching product: ${error.message}`);
        }
    }
}

function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter((id) => id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

async function checkout() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    console.log('Token:', token);
    console.log('User ID:', userId);
    console.log('Cart:', cart);

    if (!token || !userId) {
        alert('Please log in to proceed with checkout.');
        window.location.href = './login.html';
        return;
    }

    if (!cart || cart.length === 0) {
        alert('Cart is empty. Add items to cart before checkout.');
        return;
    }

    console.log(localStorage.getItem('token'));
    console.log(localStorage.getItem('userId'));


    try {
        const response = await fetch('http://localhost:5000/api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ userId, products: cart }),
        });

        console.log('Checkout response status:', response.status);

        if (response.ok) {
            const data = await response.json();
            console.log('Order created:', data);
            alert('Order placed successfully!');
            localStorage.removeItem('cart');
            window.location.href = './orders.html';
        } else {
            const data = await response.json();
            console.log('Checkout error response:', data);
            alert(data.message || 'Checkout failed!');
        }
    } catch (error) {
        console.error('Error during checkout:', error);
    }
}

document.addEventListener('DOMContentLoaded', displayCart);
document.getElementById('checkoutButton').addEventListener('click', checkout);


