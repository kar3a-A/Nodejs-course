const express = require("express");
const morgan = require("morgan");
require("dotenv").config();

const app = express();
app.use(morgan("dev"));

app.get('/', (req, res)=>{
    res.send("Hello World!");
})

// app.listen(4000);
app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})