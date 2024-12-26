require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('../models/Product');

const sampleProducts = [
  {
    name: 'Nike',
    description: 'Comfortable Shoes',
    price: 59.99,
  },

  {
    name: 'Adidas',
    description: 'Running Shoes',
    price: 79.99
  },

  // Add more sample products as needed
];

async function seedProducts() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connected successfully');

    // Clear existing products
    await Product.deleteMany({});
    console.log('Existing products removed');

    // Insert sample products
    await Product.insertMany(sampleProducts, {ordered: false });
    console.log('Sample products inserted successfully');

    // Close the database connection
    await mongoose.connection.close();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error during database seeding:', error);
    process.exit(1);
  }
}

// Execute the seeding function if this script is run directly
if (require.main === module) {
  seedProducts();
} else {
  // Export the function for use in other modules
  module.exports = seedProducts;
}
