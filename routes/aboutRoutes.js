const express = require('express');
const router = express.Router();
const AboutController = require('../controllers/AboutController');

// Route to get the about page
router.get('/about', AboutController.index);

module.exports = router