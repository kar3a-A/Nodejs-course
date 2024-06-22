const { render } = require('ejs');
const express = require('express');
let morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

// db url
let mongoUrl = "mongodb+srv://kar3a:test1234@cluster0.zrz245h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(mongoUrl).then(()=>{
    console.log('db connected')
    app.listen(3000,()=>{
        console.log('app is running on port 3000')
    })
}).catch((err)=>{
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

app.get('/',(req,res)=>{
    const blog = [
        {name: 'kkh',age:13},
        {name:'mmk',age:12}
        ]
    if(req){
        // use ejs render
        res.render('home',
        {blog,
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
// app.listen for listen server
