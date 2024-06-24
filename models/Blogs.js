// Import the MongoDB driver for Node.js
const { Timestamp } = require('mongodb')

// Import the Mongoose library for working with MongoDB in Node.js
const mongoose = require('mongoose')

// Mongoose uses a schema to define the structure of the documents in the collection
// We create a schema for the Blog model
const BlogSchema = mongoose.Schema({
    // Define the fields of the Blog model

    // The title field is a string and is required
    title:{
        type: String,
        required: true
    },

    // The intro field is a string and is required
    intro:{
        type: String,
        required: true
    },

    // The body field is a string and is not required
    body:{
        type: String,
        required: false
    },
},
{
    // Enable automatic creation and update timestamps for the documents in the collection
    timestamps: true
})

// Create a model for the Blog collection using the BlogSchema
// The first argument is the name of the model (in this case, 'Blog')
// The second argument is the schema for the model
const Blog = mongoose.model('Blog', BlogSchema)

// Export the Blog model so that it can be used in other files
module.exports = Blog
