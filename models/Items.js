
const mongoose = require("mongoose");

const itemsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    img:{
        type:String,
        required: false
    }

},
{
    timestamps: true
})

const Item = mongoose.model("Item", itemsSchema)
module.exports = Item