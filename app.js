const { render } = require('ejs');
const express = require('express');
// package use 'morgan'
let morgan = require('morgan');
// import mongoose
const mongoose = require('mongoose');
// import Blog model from models/Blogs
const Blog = require('./models/Blogs');
// import User model from models/Users
const User = require('./models/Users');
// create app
const app = express();


// app.get('/add-blog', 

app.get('/add-blog', async (req, res) => {
    if (req) {
        let blog = new Blog({
            title: 'title2',
            intro: 'intro2',
            body: 'body2'
        })
        await blog.save()
        res.send('blog saved')
    }
})

// generate username
const { generateUsername } = require("unique-username-generator");
app.get('/add-user', async (req, res) => {
    if(req){
        let username = generateUsername("",3);

        let user = new User({
            name: username,
            email: `${username}@gmail.com`,
            password:`${username}1234`
        })
        await user.save()
        res.send('user data saved')
    }
})

// find blog 'User' by id
app.get('/find-blog', async (req, res) => {
    if(req){
        let blog = await  User.findById("6677f904b21c40735614632f");
        console.log(blog)
        res.json(blog)
    }
})
// db url
let mongoUrl = "mongodb+srv://kar3a:test1234@cluster0.zrz245h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// connect db
mongoose.connect(mongoUrl).then(()=>{
    console.log('db connected')
    // app.listen for listen server
    // start server
    app.listen(3000,()=>{
        console.log('app is running on port 3000')
    })
}).catch((err)=>{
    // if error
    console.log(err)
})

// using ejs with app.set (...)
app.set('views','./views')
// recall ejs engine
app.set('view engine', 'ejs')

// package use 'morgan'
// show status code 
app.use(morgan('dev'))
// static file
app.use(express.static('public'))

app.get('/', async(req,res)=>{
    // find all blogs
    let blogs = await User.find().sort({createdAt:-1})
    console.log(blogs)
    if(req){
        // use ejs render
        res.render('home',
        {
            blogs,
            title:'Home Page'
        }
        )
    }
})
app.get('/about', (req, res) => {
    if (req) {
        res.render('about',
            {
                title: 'About Page'}
        )
    }
})

app.get('/contact', (req, res) => {
    if (req) {
        res.render('contact',
            {
                title: 'Contact Page'
            }
        )
    }
})
app.get('/cart', (req, res) => {
    const items = [
        {product:"Asus Zenbook 14 oled", price:1400},
        {product:"Asus Zenbook 13 oled", price:1200}
    ]
    if (req) {
        res.render('cart',
            {
                items,
                title: 'Cart'
            }
        )
    }
})
// app use for 404 page ***
app.use((req,res)=>{
    if(req){
        res.status(404).render('404',
            {title:'404 Page'}
        );
    }
})

