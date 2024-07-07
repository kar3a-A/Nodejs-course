const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const { route } = require("./routes/receipes");
const receipeRoutes = require("./routes/receipes");

const app = express();
app.use(morgan("dev"));

app.use('/api/receipes',receipeRoutes);

// app.listen(4000);
app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})