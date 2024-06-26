const {render} = require("ejs");
const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const Item = require("./models/Items");
const User = require("./models/Users");


app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(morgan("dev"));

const expressLayouts = require("express-ejs-layouts");
app.use(expressLayouts);
app.set("layout", "./layouts/default");

let mongoURL = "mongodb+srv://kkh2002csw:kkh2002csw1234@shoppingcluster.d6jravl.mongodb.net/?retryWrites=true&w=majority&appName=ShoppingCluster"
    mongoose.connect(mongoURL).then(()=>{
        console.log("MongoDB connected");
        app.listen(3000, ()=>{
            console.log("Listening on port 3000");
        })
    }).catch((err)=>{
        console.log(err);
    })

app.get('/',async (req, res)=>{
    let items = await Item.find().sort({createdAt: -1}).limit(5);
    res.render('home',{
        items,
        title: 'Home'
    })
})
    app.get('/items/add', (req, res)=>{
        res.render('items/create', {
            title: 'Add Item'
        })
    })
    app.post('/', async (req, res)=>{
        let {product, price, imgLink} = req.body;
        let item = new Item({
            name: product, 
            price, 
            img: imgLink
        });
        await item.save();
        res.redirect('/');

    })
    app.get('/items/:id', async(req, res)=>{
        let id = req.params.id;
        let item = await Item.findById(id);
        res.render('items/show', {
            item,
            title: 'Item Details'
        })
    })
app.get('/users/add', (req, res)=>{
    res.render('users/create', {
        title: 'Add User'
})
})
    app.post('/users', async (req, res)=>{
        let {username, email, password, name} = req.body;

        let user = new User({
            username, 
            email, 
            password, 
            name, 
        });
        await user.save();
        res.redirect('/users');
    })
    app.get('/users', async (req, res)=>{
        let users = await User.find().sort({createdAt: -1});
        res.render('users/allusers', {
            users,
            title: 'Users'
        })
    })

app.use((req, res)=>{
    res.status(404).render('404', {
        title: 'Page Not Found'
    });
})