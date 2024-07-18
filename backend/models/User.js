const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }

}, { timestamps: true });

UserSchema.statics.register = async function(name,email,password){
    let userExists = await this.findOne({ email });
    if (userExists) {
        throw "User already exists"
    }
    salt = await bcrypt.genSalt()
    hashPw = await bcrypt.hash(password, salt)
    let newUser = await this.create({
        name: name,
        email: email,
        password: hashPw
    })

    return newUser
}

// *** Receipe (singular)
module.exports = mongoose.model("User", UserSchema)