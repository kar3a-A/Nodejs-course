// Import necessary modules
const { render } = require('ejs');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/Blogs');
const User = require('./models/Users');
//! -----------------------------------------------------------------------
// Create the express app
const app = express();

// Middleware to parse urlencoded request bodies
app.use(express.urlencoded({ extended: true}));

// Set the views directory and the view engine to ejs
app.set('views','./views');
app.set('view engine', 'ejs');

// Use express-ejs-layouts and set the layout to default
const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
app.set('layout', 'layouts/default');

// Use morgan to show status code
app.use(morgan('dev'));

// Use static files from the public directory
app.use(express.static('public'));
//! -----------------------------------------------------------------------
// Route to find a blog by id
app.get('/find-blog', async (req, res) => {
    // Find the blog by id and send it back as json
    let blog = await User.findById("6677f904b21c40735614632f");
    console.log(blog);
    res.json(blog);
});
//! -----------------------------------------------------------------------
// Connect to the database
let mongoUrl = "mongodb+srv://kar3a:test1234@cluster0.zrz245h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(mongoUrl).then(()=>{
    console.log('db connected');
    // Start the server
    app.listen(3000,()=>{
        console.log('app is running on port 3000');
    });
}).catch((err)=>{
    // If there is an error connecting to the database, log it
    console.log(err);
});
//! -----------------------------------------------------------------------
// Route to get all users
app.get('/', async(req,res)=>{
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
app.get('/users/create',(req,res)=>{
    // Render the create user page with a title
    res.render('users/create',
        {
            title: 'Create User'
        }
    );
});
app.post('/', async (req, res) => {
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

// Route to get the about page
app.get('/about', (req, res) => {
    // Render the about page with a title
    res.render('about',
        {
            title: 'About Page'
        }
    );
});

// Route to get all blogs
app.get('/blogs',async (req, res) => {
    // Find all blogs and sort them by createdAt in descending order
    let blogs = await Blog.find().sort({createdAt:-1});
    // Render the blogs page with the blogs and a title
    res.render('blogs',
        {
            blogs,
            title: 'Blogs Page'
        }
    );
});

// Route to create a blog
app.get('/blogs/create', (req, res) => {
    // Render the create blog page with a title
    res.render('blogs/create',
        {
            title: 'Create Blog'
        }
    );
});
app.post('/blogs',async (req, res) => {
    // Get the blog title, intro, and body from the request body
    let {blogTitle,blogIntro,blogBody} = req.body
    // Create a new blog with the provided information
    let blog = new Blog({
        title: blogTitle,
        intro: blogIntro,
        body: blogBody
    });
    // Save the blog to the database
    await blog.save();
    console.log('~~~  Blog saved in db  ~~~');
    // Redirect to the blogs page
    res.redirect('/blogs');
});

// Route to get the blog by id
app.get(`/blogs/:id`, async(req,res)=>{
    let id = req.params.id
    let blog = await Blog.findById(id)
    console.log(blog)
    res.render('blogs/show',{
        blog,
        title: 'Blog details'
    })
})

// Route to get the cart page
app.get('/cart', (req, res) => {
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

// Route for 404 page
app.use((req,res)=>{
    // Render the 404 page with a title
    res.status(404).render('404',
        {title:'404 Page'}
    );
});


