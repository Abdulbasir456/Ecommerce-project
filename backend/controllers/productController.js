const Product = require('../models/Product');

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);

    } catch (error) {
        res.status(500).json({message: 'Server error', error});
        
    }
};

const getProductById = async (req, res) => {

    const { id } = req.params;
    try {
        const product = await Product.findById(id);
        if (!product) return res.status(404).json({message: 'Product not found'});
        res.json(product);

    } catch (error) {
        res.status(500).json({message: 'Server error', error });

    }
};

module.exports = {getAllProducts, getProductById };