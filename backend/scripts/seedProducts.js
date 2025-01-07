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



/*
require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('../models/Product');

const sampleProducts = [
  {
    name: 'Nike Shoes',
    description: 'Comfortable Shoes',
    price: 59.99,
    imageUrl: '/images/shoe5.png',
  },
  {
    name: 'Adidas Shoes',
    description: 'Running Shoes',
    price: 79.99,
    imageUrl: '/images/shoe3.png',
  },
  {
    name: 'Winter Jacket',
    description: 'Warm and light-weight jacket',
    price: 80.0,
    imageUrl: '/images/jacket1.png',
  },
  {
    name: 'T-shirt',
    description: 'A soft cotton T-shirt with a classic fit and simple design',
    price: 40.0,
    imageUrl: '/images/jacket10.png',
  },
  {
    name: 'Jumper',
    description: 'A warm, knitted jumper with a classic fit and cozy feel',
    price: 65.0,
    imageUrl: '/images/jacket4.png',
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

*/

require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('../models/Product');

const sampleProducts = [
  {
    name: 'Jacket1',
    description: 'Comfortable Jacket',
    price: 59.99,
    imageUrl: '/images/jacket1.png',
  },
  {
    name: 'Jacket2',
    description: 'Stylish Jacket',
    price: 79.99,
    imageUrl: '/images/jacket2.png',
  },
  {
    name: 'Winter Jacket',
    description: 'Warm and light-weight jacket',
    price: 80.0,
    imageUrl: '/images/jacket3.png',
  },
  {
    name: 'T-shirt',
    description: 'A soft cotton T-shirt with a classic fit and simple design',
    price: 40.0,
    imageUrl: '/images/jacket4.png',
  },
  {
    name: 'Jumper',
    description: 'A warm, knitted jumper with a classic fit and cozy feel',
    price: 65.0,
    imageUrl: '/images/jacket5.png',
  },
  {
    name: 'Jacket6',
    description: 'Nice Jacket',
    price: 55.0,
    imageUrl: '/images/jacket6.png',
  },
  {
    name: 'Jacket6',
    description: 'Nice Jacket',
    price: 55.0,
    imageUrl: '/images/jacket7.png',
  },
  {
    name: 'Jacket6',
    description: 'Nice Jacket',
    price: 55.0,
    imageUrl: '/images/jacket8.png',
  },
  {
    name: 'Jacket6',
    description: 'Nice Jacket',
    price: 55.0,
    imageUrl: '/images/jacket9.png',
  },
  {
    name: 'Jacket6',
    description: 'Nice Jacket',
    price: 55.0,
    imageUrl: '/images/jacket10.png',
  },
  {
    name: 'Jeans1',
    description: 'Nice Jeans',
    price: 55.0,
    imageUrl: '/images/jeans1.png',
  },
  {
    name: 'Jeans2',
    description: 'Nice Jeans',
    price: 49.99,
    imageUrl: '/images/jeans2.png',
  },
  {
    name: 'Jeans3',
    description: 'Nice Jeans',
    price: 44.99,
    imageUrl: '/images/jeans3.png',
  },
  {
    name: 'Jeans4',
    description: 'Nice Jeans',
    price: 45.0,
    imageUrl: '/images/jeans4.png',
  },
  {
    name: 'Jeans5',
    description: 'Nice Jeans',
    price: 50.0,
    imageUrl: '/images/jeans5.png',
  },
  {
    name: 'shoe1',
    description: 'Nice Jeans',
    price: 50.0,
    imageUrl: '/images/shoe1.png',
  },
  {
    name: 'shoe2',
    description: 'Nice Jeans',
    price: 50.0,
    imageUrl: '/images/shoe2.png',
  },
  {
    name: 'shoe3',
    description: 'Nice Jeans',
    price: 50.0,
    imageUrl: '/images/shoe3.png',
  },
  {
    name: 'shoe4',
    description: 'Nice Jeans',
    price: 50.0,
    imageUrl: '/images/shoe4.png',
  },
  {
    name: 'shoe5',
    description: 'Nice Jeans',
    price: 50.0,
    imageUrl: '/images/shoe5.png',
  },
  {
    name: 'shoe6',
    description: 'Nice Jeans',
    price: 50.0,
    imageUrl: '/images/shoe6.png',
  },
  {
    name: 'shorts1',
    description: 'Nice Jeans',
    price: 50.0,
    imageUrl: '/images/shorts1.png',
  },
  {
    name: 'shorts2',
    description: 'Nice Jeans',
    price: 50.0,
    imageUrl: '/images/shorts2.png',
  },
  {
    name: 'shorts3',
    description: 'Nice Jeans',
    price: 50.0,
    imageUrl: '/images/shorts3.png',
  },
  {
    name: 'shorts4',
    description: 'Nice Jeans',
    price: 50.0,
    imageUrl: '/images/shorts4.png',
  },
  {
    name: 'shorts5',
    description: 'Nice Jeans',
    price: 50.0,
    imageUrl: '/images/shorts5.png',
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
      // Check if the product exists
      const existingProduct = await Product.findOne({ name: product.name });

      if (existingProduct) {
        // Update existing product
        await Product.updateOne({ name: product.name }, product);
        console.log(`Product updated: ${product.name}`);
      } else {
        // Create a new product
        await Product.create(product);
        console.log(`Product added: ${product.name}`);
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

