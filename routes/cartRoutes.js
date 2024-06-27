const express = require('express');
const router = express.Router();
const CartController = require('../controllers/CartController');

// Route to get the cart page
router.get('/cart', CartController.index);

module.exports = router