async function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cartContainer');
    cartContainer.innerHTML = '';

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p> Your cart is empty</p>';
        return;
    }

    for (const productId of cart) {
        const response = await fetch(`http://localhost:5000/api/products/${productId}`);
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

    if (!token) {
        alert('Please log in to proceed with checkout.');
        window.location.href = '/login.html';
        return;
    }

    try {
        const response = await fetch('http://localhost:5000/api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ products: cart }),
        });

        if (response.ok) {
            alert('Order placed successfully!');
            localStorage.removeItem('cart');
            window.location.href = '/orders.html';
        } else {
            const data = await response.json();
            alert(data.message || 'Checkout failed!' );
        }

    } catch(error) {
        console.error('Error during checkout:', error);

    }
}

// Call displayCart on page load
document.addEventListener('DOMContentLoaded', displayCart);

// Attach checkout event
document.getElementById('checkoutButton').addEventListener('click', checkout);