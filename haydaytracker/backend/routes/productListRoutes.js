const express = require('express');

const router = express.Router();
const {
    GetProducts,
    GetProductById
} = require('../controllers/productList');
// Product List Routes
router.get('/', GetProducts); // Get all products
router.get('/:id', GetProductById); // Get a specific product by ID
module.exports = router;
// This code defines the routes for product list operations in an Express application.
// It imports the necessary modules, sets up a router, and defines two routes:
