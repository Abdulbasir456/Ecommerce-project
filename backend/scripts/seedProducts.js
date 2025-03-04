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
    name: 'Classic Denim Jacket',
    description: 'A comfortable and stylish denim jacket perfect for any casual outing.',
    price: 59.99,
    imageUrl: '/images/jacket10.png',
  },
  {
    name: 'Modern Leather Jacket',
    description: 'A sleek leather jacket for a modern and trendy look.',
    price: 89.99,
    imageUrl: '/images/jacket8.png',
  },
  {
    name: 'Insulated Winter Jacket',
    description: 'Warm, lightweight, and ideal for cold weather adventures.',
    price: 99.99,
    imageUrl: '/images/jacket3.png',
  },
  {
    name: 'Basic Cotton T-shirt',
    description: 'A soft and breathable cotton T-shirt with a versatile classic fit.',
    price: 19.99,
    imageUrl: '/images/jacket4.png',
  },
  {
    name: 'Knitted Wool Jumper',
    description: 'Stay cozy with this warm and stylish knitted wool jumper.',
    price: 45.00,
    imageUrl: '/images/jacket5.png',
  },
  {
    name: 'Quilted Down Jacket',
    description: 'A warm quilted jacket with down insulation for extreme comfort.',
    price: 129.99,
    imageUrl: '/images/jacket6.png',
  },
  {
    name: 'Hooded Windbreaker',
    description: 'A lightweight windbreaker with a hood, perfect for outdoor activities.',
    price: 49.99,
    imageUrl: '/images/jacket7.png',
  },
  {
    name: 'Rainproof Shell Jacket',
    description: 'Durable and waterproof, designed for rainy weather.',
    price: 79.99,
    imageUrl: '/images/jacket2.png',
  },
  {
    name: 'Softshell Hiking Jacket',
    description: 'Comfortable and breathable, designed for outdoor hikes.',
    price: 74.99,
    imageUrl: '/images/jacket9.png',
  },
  {
    name: 'Urban Puffer Jacket',
    description: 'A stylish puffer jacket with maximum warmth for urban settings.',
    price: 99.99,
    imageUrl: '/images/jacket1.png',
  },
  {
    name: 'Slim Fit Jeans',
    description: 'A pair of slim-fit jeans with a clean and modern look.',
    price: 49.99,
    imageUrl: '/images/jeans1.png',
  },
  {
    name: 'Classic Blue Jeans',
    description: 'Timeless blue jeans with a straight-leg fit.',
    price: 39.99,
    imageUrl: '/images/jeans4.png',
  },
  {
    name: 'Distressed Skinny Jeans',
    description: 'Edgy skinny jeans with a distressed design for a bold style.',
    price: 44.99,
    imageUrl: '/images/jeans3.png',
  },
  {
    name: 'Relaxed Fit Jeans',
    description: 'Comfortable, loose-fit jeans for everyday wear.',
    price: 45.00,
    imageUrl: '/images/jeans2.png',
  },
  {
    name: 'High-Waist Vintage Jeans',
    description: 'Retro-style high-waist jeans with a vintage feel.',
    price: 55.00,
    imageUrl: '/images/jeans5.png',
  },
  {
    name: 'Athletic Running Shoes',
    description: 'Lightweight and supportive running shoes for active lifestyles.',
    price: 69.99,
    imageUrl: '/images/shoe3.png',
  },
  {
    name: 'Leather Dress Shoes',
    description: 'Elegant leather shoes perfect for formal occasions.',
    price: 89.99,
    imageUrl: '/images/shoe4.png',
  },
  {
    name: 'Casual Sneakers',
    description: 'Comfortable sneakers for everyday wear.',
    price: 59.99,
    imageUrl: '/images/shoe2.png',
  },
  {
    name: 'Trail Hiking Boots',
    description: 'Rugged boots designed for outdoor trails and tough terrain.',
    price: 99.99,
    imageUrl: '/images/shoe1.png',
  },
  {
    name: 'Slip-On Loafers',
    description: 'Convenient and stylish loafers for a casual or semi-formal look.',
    price: 49.99,
    imageUrl: '/images/shoe5.png',
  },
  {
    name: 'Breathable Mesh Trainers',
    description: 'Comfortable trainers with a breathable mesh upper for all-day wear.',
    price: 54.99,
    imageUrl: '/images/shoe6.png',
  },
  {
    name: 'Cargo Shorts',
    description: 'Durable and functional shorts with multiple pockets.',
    price: 39.99,
    imageUrl: '/images/shorts4.png',
  },
  {
    name: 'Chino Shorts',
    description: 'Smart-casual chino shorts for a stylish summer look.',
    price: 34.99,
    imageUrl: '/images/shorts2.png',
  },
  {
    name: 'Denim Cut-Off Shorts',
    description: 'Trendy cut-off shorts made from durable denim.',
    price: 29.99,
    imageUrl: '/images/shorts3.png',
  },
  {
    name: 'Running Shorts',
    description: 'Lightweight and breathable shorts designed for athletes.',
    price: 24.99,
    imageUrl: '/images/shorts1.png',
  },
  {
    name: 'Beach Shorts',
    description: 'Vibrant and comfortable shorts perfect for the beach.',
    price: 22.99,
    imageUrl: '/images/shorts5.png',
  },
];



async function seedProducts() {
  try {
    // Connect to the database
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connected successfully');

    // Clear the Product collection
    await Product.deleteMany({});
    console.log('All existing products cleared from the database.');

    // Seed the database with the sample products
    for (const product of sampleProducts) {
      await Product.create(product);
      console.log(`Product added: ${product.name}`);
    }

    // Close the database connection
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





/*

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

*/


