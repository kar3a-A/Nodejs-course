// import mongoose
const mongoose = require('mongoose')

// create schema
// BlogSchema
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

//  Blog is collection name & must be same as collection name with singular form
// export model with BlogSchema
const Blog = mongoose.model('Blog', BlogSchema)
module.exports = Blog