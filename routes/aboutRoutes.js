const express = require('express');
const router = express.Router();


// Route to get the about page
router.get('/about', (req, res) => {
    // Render the about page with a title
    res.render('about',
        {
            title: 'About Page'
        }
    );
});

module.exports = router