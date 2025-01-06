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




/*
function displayOrders(orders) {
    const orderContainer = document.getElementById('ordersContainer');
    if (orders.length === 0) {
        orderContainer.innerHTML = `<p class="text-center">You have no orders yet.</p>`;
        return;
    }

    orders.forEach(order => {
        const orderElement = document.createElement('div');
        orderElement.classList.add('order-card');
        orderElement.innerHTML = `
            <h2>Order ID: ${order._id}</h2>
            <h3>Products:</h3>
            <ul class="product-list">
                ${order.products.map(p => `
                    <li class="product-item">
                        <div class="product-info">
                            <h4>${p.product.name}</h4>
                            <p>${p.product.description}</p>
                            <p>Price: £${p.product.price}</p>
                            <p>Quantity: ${p.quantity}</p>
                        </div>
                    </li>
                `).join('')}
            </ul>
            <p class="total-price">Total Price: £${order.totalPrice}</p>
        `;
        orderContainer.appendChild(orderElement);
    });
}

document.addEventListener('DOMContentLoaded', fetchOrders);
*/




/*
function displayOrders(orders) {
    const ordersContainer = document.getElementById('ordersContainer');
    ordersContainer.innerHTML = '';

    if (!orders || orders.length === 0) {
        ordersContainer.innerHTML = '<p>You have no orders yet.</p>';
        return;
    }

    orders.forEach(order => {
        const orderDiv = document.createElement('div');
        orderDiv.classList.add('order');

        const productsHtml = order.products.map(p => `
            <div>
                <h3>${p.product.name}</h3>
                <p>${p.product.description}</p>
                <p>Price: £${p.product.price}</p>
                <p>Quantity: ${p.quantity}</p>
            </div>
        `).join('');

        orderDiv.innerHTML = `
            <h2>Order ID: ${order._id}</h2>
            <p>Total Price: £${order.totalPrice}</p>
            <div>${productsHtml}</div>
        `;

        ordersContainer.appendChild(orderDiv);
    });
}

document.addEventListener('DOMContentLoaded', fetchOrders);
*/
