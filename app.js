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
//! -----------------------
// use middleware
app.use(express.urlencoded({ extended: true}))
// using ejs with app.set (...)
app.set('views','./views')
// recall ejs engine
app.set('view engine', 'ejs')
//! -----------------------
// use express layouts
let expressLayouts = require('express-ejs-layouts')
app.use(expressLayouts);
app.set('layout', 'layouts/default');
//! -----------------------
// package use 'morgan'
// show status code 
app.use(morgan('dev'))
// static file
app.use(express.static('public'))
//! -----------------------
// find blog 'User' by id
app.get('/find-blog', async (req, res) => {
    if(req){
        let blog = await  User.findById("6677f904b21c40735614632f");
        console.log(blog)
        res.json(blog)
    }
})
//! -----------------------
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
//! -----------------------

app.get('/', async(req,res)=>{
    // find all blogs
    let users = await User.find().sort({createdAt:-1})
    if(req){
        // use ejs render
        res.render('home',
        {
            users,
            title:'Home Page'
        }
        )
    }
})
    app.get('/users/create',(req,res)=>{
        if(req){
            res.render('users/create',
                {
                    title: 'Create User'
                }
            )
        }
    })
    app.post('/', async (req, res) => {
        if (req) {
            let {userName, userEmail, userPassword} = req.body
            let user = new User({
                name: userName,
                email: userEmail,
                password: userPassword
            })
            await user.save()
            console.log('~~~  User saved in db  ~~~')
            res.redirect('/')
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

app.get('/blogs',async (req, res) => {
    if (req) {
        let blogs = await Blog.find().sort({createdAt:-1});
        res.render('blogs',
            {
                blogs,
                title: 'Blogs Page'
            }
        )
    }
})
    app.get('/blogs/create', (req, res) => {
        if (req) {
            res.render('blogs/create',
                {
                    title: 'Create Blog'
                }
            )
        }
    })
    app.post('/blogs',async (req, res) => {
        if (req) {
            let {blogTitle,blogIntro,blogBody} = req.body
            let blog = new Blog({
                title: blogTitle,
                intro: blogIntro,
                body: blogBody
            })
            await blog.save()
            console.log('~~~  Blog saved in db  ~~~')
            res.redirect('/blogs')
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

