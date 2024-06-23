// import mongoose
const mongoose = require('mongoose')

// create schema
const BlogSchema = mongoose.Schema({
    // title, intro, body
    title:{
        type: String,
        required: true
    },
    intro:{
        type: String,
        required: true
    },
    body:{
        type: String,
        required: false
    },
})
// export model
const Blog = mongoose.model('Blog', BlogSchema)
module.exports = Blog