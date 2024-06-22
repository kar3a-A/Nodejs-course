const { render } = require('ejs');
const express = require('express');


const app = express();
// using ejs with app.set (...)
app.set('views','./views')
// recall ejs engine
app.set('view engine', 'ejs')

app.use((req,res,next)=>{
    if(req){
        console.log('We are using middleware')
        next();
    }

})

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
app.listen(3000,()=>{
    console.log('app is running on port 3000')
})