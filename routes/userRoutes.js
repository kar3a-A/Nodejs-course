const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');


// Route to get all users
router.get('/', (req, res) => {
    res.redirect('/users')
})
    router.get('/users',UserController.index);
    // Route to create a user
    router.get('/users/create',UserController.create);
    router.post('/users',UserController.store);

module.exports = router