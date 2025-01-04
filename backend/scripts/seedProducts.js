/*require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('../models/Product');

const sampleProducts = [
  {
    name: 'Nike Shoes',
    description: 'Comfortable Shoes',
    price: 59.99,
  },

  {
    name: 'Adidas Shoes',
    description: 'Running Shoes',
    price: 79.99
  },

  {
    name: 'Winter Jacket',
    description: 'Warm and light-weight jacket',
    price: 80.00
  },

  {
    name: 'T-shirt',
    description: 'A soft cotton T-shirt with a classic fit and simple design',
    price: 40.00
  },

  {
    name: 'Jumper',
    description: 'A warm, knitted jumper with a classic fit and cozy feel',
    price: 65.00
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
    //await Product.insertMany(sampleProducts, {ordered: false });
    await Product.insertMany(sampleProducts);
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
*/




require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('../models/Product');

const sampleProducts = [
  {
    name: 'Nike Shoes',
    description: 'Comfortable Shoes',
    price: 59.99,
  },
  {
    name: 'Adidas Shoes',
    description: 'Running Shoes',
    price: 79.99,
  },
  {
    name: 'Winter Jacket',
    description: 'Warm and light-weight jacket',
    price: 80.0,
  },
  {
    name: 'T-shirt',
    description: 'A soft cotton T-shirt with a classic fit and simple design',
    price: 40.0,
  },
  {
    name: 'Jumper',
    description: 'A warm, knitted jumper with a classic fit and cozy feel',
    price: 65.0,
  },
];

async function seedProducts() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connected successfully');

    for (const product of sampleProducts) {
      const existingProduct = await Product.findOne({
        name: product.name,
        description: product.description,
        price: product.price,
      });

      if (!existingProduct) {
        
        await Product.create(product);
        console.log(`Product added: ${product.name}`);
      } else {
        console.log(`Product already exists: ${product.name}`);
      }
    }

    await mongoose.connection.close();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error during database seeding:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  seedProducts();
} else {
  module.exports = seedProducts;
}

