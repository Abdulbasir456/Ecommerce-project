
const express = require('express');
const {getAllProducts, getProductById } = require('../controllers/productController');

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getProductById);

module.exports = router;


// in admin functionality
/*
const express = require('express');
const { getProducts, getProductById, createProduct } = require('../controllers/productController');
const {protect, admin } = require('../middleware/adminMiddleware'); // Ensure middleware is imported correctly

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', protect, admin, createProduct); // Ensure `createProduct` is properly defined

module.exports = router;

*/



