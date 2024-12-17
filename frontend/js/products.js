
/*
async function fetchProducts() {
    try {
        const response = await fetch('http://localhost:5000/api/products');
        const products = response.json();

        const productContainer = document.getElementById('productContainer');
        productContainer.innerHTML = '';

        products.forEach((product) => {
            const productCard = `
            <div class="product-card">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart('${product._id}')">Add to Cart</button>
            </div>
            `;

            productContainer.innerHTML += productCard;
        });
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

// Add product to cart

function addToCart(productId) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart!');

}

document.addEventListener('DOMContentLoaded', fetchProducts);

*/
