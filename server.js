const {render} = require('ejs');
const express = require('express')


// Initiate express
const app = express()
// Initiate ejs
app.set('view engine', 'ejs')
app.set('views', './views')

app.get('/', (req,res)=>{
    const blog = [
        {name: 'naruto',age:12},
        {name: 'sakura', age:11}
    ]
    if(req){
        res.render('home',
            {
                blog,
                title: 'Home'
            }
        )
    }
})
app.get('/about', (req,res)=>{
    if(req){
        res.render('about',
            {
                title: 'About'
            }
        )
    }
})
app.get('/about-us', (req,res)=>{
    if(req){
        res.status(301)
        res.render('about',
            {
                title: 'Contact'
            }
        )
    }
})

app.get('/contact', (req,res)=>{
    if(req){
        res.render('contact',
            {
                title: 'Contact'
            }
        )
    }
})

app.use((req,res)=>{
    if(req){
        res.status = 404,
        res.render('404',
            {
                title: '404'
            }
        )
    }
})

app.listen(3000,()=>{
    console.log('app is running on port 3000')
})