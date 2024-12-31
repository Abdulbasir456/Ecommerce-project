

const express = require('express');
const Product = require('../models/Product');
const Order = require('../models/Order');

const router = express.Router();

// Place an order
router.post('/', async (req, res) => {
    try {
        const { userId, products } = req.body;

        if (!products || products.length === 0) {
            return res.status(400).json({ message: 'No products in the order.' });
        }

        let totalPrice = 0;
        const orderProducts = [];

        for (const productId of products) {
            const product = await Product.findById(productId);
            if (!product) {
                return res.status(404).json({ message: `Product not found: ${productId}` });
            }

            orderProducts.push({ product: product._id, quantity: 1 });
            totalPrice += product.price;
        }

        const order = new Order({
            user: userId,
            products: orderProducts,
            totalPrice,
        });

        const createdOrder = await order.save();
        res.status(201).json(createdOrder);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error while placing the order.' });
    }
});

module.exports = router;
