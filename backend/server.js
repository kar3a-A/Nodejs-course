const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const { route } = require("./routes/receipes");
const receipeRoutes = require("./routes/receipes");
const mongoose = require("mongoose");
const cors = require("cors")

const app = express();
const mongoURL = "mongodb+srv://kkh2003csw:test1234@mern-cluster.ssr4k0f.mongodb.net/?retryWrites=true&w=majority&appName=MERN-Cluster"

mongoose.connect(mongoURL).then(()=>{
    console.log("Connected to mongoDB");
    // app.listen(4000);
    app.listen(process.env.PORT, ()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
    })
})
//!  cors should be only use for local developent
app.use(cors())

app.use(express.json());
app.use(morgan("dev"));

app.use('/api/receipes',receipeRoutes);



