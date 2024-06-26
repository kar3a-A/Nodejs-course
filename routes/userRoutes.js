const express = require('express');
const router = express.Router();
const User = require('../models/Users');

// Route to get all users
router.get('/', (req, res) => {
    res.redirect('/users')
})
    router.get('/users', async(req,res)=>{
        // Find all users and sort them by createdAt in descending order
        let users = await User.find().sort({createdAt:-1});
        // Render the home page with the users and a title
        res.render('home',
        {
            users,
            title:'Home Page'
        }
        );
    });
    // Route to create a user
    router.get('/users/create',(req,res)=>{
        // Render the create user page with a title
        res.render('users/create',
            {
                title: 'Create User'
            }
        );
    });
    router.post('/users', async (req, res) => {
        // Get the user name, email, and password from the request body
        let {userName, userEmail, userPassword} = req.body
        // Create a new user with the provided information
        let user = new User({
            name: userName,
            email: userEmail,
            password: userPassword
        });
        // Save the user to the database
        await user.save();
        console.log('~~~  User saved in db  ~~~');
        // Redirect to the home page
        res.redirect('/');
    });

module.exports = router