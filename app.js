const express = require('express');


const app = express();

app.get('/',(req,res)=>{
    if(req){
        res.sendFile('./views/home.html',{root: __dirname})
    }
})
app.get('/about', (req, res) => {
    if (req) {
        res.sendFile('./views/about.html',{root: __dirname})
    }
})
app.get('/about-us', (req, res) => {
    if (req) {
        // redirect
        res.redirect('/about');
    }
})
app.get('/contact', (req, res) => {
    if (req) {
        res.sendFile('./views/contact.html', { root: __dirname })
    }
})
// app use for 404 page ***
app.use((req,res)=>{
    if(req){
        res.status(404);
        res.sendFile('./views/404.html', { root: __dirname })
    }
})
// app.listen for listen server
app.listen(3000,()=>{
    console.log('app is running on port 3000')
})