
async function fetchProducts() {
    try {
        const response = await fetch('http://localhost:5000/api/products');

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const products = await response.json();
        displayProducts(products);

        // Store all products globally to enable searching
        window.allProducts = products;
    } catch (error) {
        console.error('Error fetching products:', error);
        alert('Failed to load products. Please try again later.');
    }
}

// Function to display products in the container
function displayProducts(products) {
    const productContainer = document.getElementById('productContainer');
    productContainer.innerHTML = ''; // Clear previous results
    productContainer.classList.add('product-grid'); // Ensure correct grid layout

    if (products.length === 0) {
        productContainer.innerHTML = '<p>No products found.</p>';
        return;
    }

    products.forEach((product) => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card'); // Apply the correct class
        productCard.innerHTML = `
            <img src="http://localhost:5000${product.imageUrl}" alt="${product.name}" />
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Price: £${product.price}</p>
            <button onclick="addToCart('${product._id}')">Add to Cart</button>
        `;

        productContainer.appendChild(productCard);
    });
}

// Search functionality
function searchProducts(event) {
    event.preventDefault(); // Prevents form submission
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();

    const filteredProducts = window.allProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery) || 
        product.description.toLowerCase().includes(searchQuery)
    );

    displayProducts(filteredProducts);
}


// Add product to cart
function addToCart(productId) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart!');
}

// Add event listener to search form
document.getElementById('searchForm').addEventListener('submit', searchProducts);
document.addEventListener('DOMContentLoaded', fetchProducts);




