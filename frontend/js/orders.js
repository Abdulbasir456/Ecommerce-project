async function fetchOrders() {
    const userId = localStorage.getItem('userId');
    const token = localStorage.getItem('token');

    if (!userId || !token) {
        alert('Please log in to view your orders.');
        window.location.href = './login.html';
        return;
    }

    try {
        const response = await fetch(`http://localhost:5000/api/orders/user/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            const data = await response.json();
            alert(data.message || 'Failed to fetch orders.');
            return;
        }

        const orders = await response.json();
        displayOrders(orders);
    } catch (error) {
        console.error('Error fetching orders:', error);
    }
}

function displayOrder() {
    const order = JSON.parse(localStorage.getItem('currentOrder'));

    if (!order) {
        alert('No order found. Please place an order first.');
        window.location.href = './cart.html';
        return;
    }

    const orderContainer = document.getElementById('ordersContainer');
    orderContainer.innerHTML = `
        <h2>Order ID: ${order._id}</h2>
        <h3>Products:</h3>
        <div>
            ${order.products.map(p => `
                <div>
                    <h4>${p.product.name}</h4>
                    <p>${p.product.description}</p>
                    <p>Price: £${p.product.price}</p>
                    <p>Quantity: ${p.quantity}</p>
                </div>
            `).join('')}
        </div>
        <p>Total Price: £${order.totalPrice}</p>
    `;
}

document.addEventListener('DOMContentLoaded', displayOrder);


