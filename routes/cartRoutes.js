const express = require('express');
const router = express.Router();

// Route to get the cart page
router.get('/cart', (req, res) => {
    // Create an array of items with the product and price
    const items = [
        {product:"Asus Zenbook 14 oled", price:1400},
        {product:"Asus Zenbook 13 oled", price:1200}
    ];
    // Render the cart page with the items and a title
    res.render('cart',
        {
            items,
            title: 'Cart'
        }
    );
});

module.exports = router