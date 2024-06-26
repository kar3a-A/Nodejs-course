// Import necessary modules
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const blogRoutes = require('./routes/blogRoutes');
const cartRoutes = require('./routes/cartRoutes');
const aboutRoutes = require('./routes/aboutRoutes');
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
app.use(userRoutes);
app.use('/blogs',blogRoutes);
app.use(cartRoutes);
app.use(aboutRoutes)



// Route for 404 page
app.use((req,res)=>{
    // Render the 404 page with a title
    res.status(404).render('404',
        {title:'404 Page'}
    );
});


