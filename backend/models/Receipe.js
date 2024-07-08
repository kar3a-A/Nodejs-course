const mongoose = require("mongoose");

const ReceipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    ingredients: {
        type: Array,
        required: true
    },

}, { timestamps: true });

// *** Receipe (singular)
module.exports = mongoose.model("Receipe", ReceipeSchema)