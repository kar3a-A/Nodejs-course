const { render } = require('ejs');
const express = require('express');


const app = express();
// using ejs with app.set (...)
app.set('views','./views')
// recall ejs engine
app.set('view engine', 'ejs')

app.get('/',(req,res)=>{
    const blog = [
        {name: 'kkh',age:13},
        {name:'mmk',age:12}
        ]
    if(req){
        // use ejs render
        res.render('home',
        {blog}
        )
    }
})
app.get('/about', (req, res) => {
    if (req) {
        res.render('about')
    }
})

app.get('/contact', (req, res) => {
    if (req) {
        res.render('contact')
    }
})
// app use for 404 page ***
app.use((req,res)=>{
    if(req){
        res.status(404).render('404');
    }
})
// app.listen for listen server
app.listen(3000,()=>{
    console.log('app is running on port 3000')
})