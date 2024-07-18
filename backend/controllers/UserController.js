const User =  require("../models/User");
const bcrypt = require("bcryptjs");

const UserController = {
    login: (req, res)=>{
        return res.json({message: "login"})
    },

    register: async(req, res)=>{
        try{
            let { name, email, password } = req.body
            let userExists = await User.findOne({ email });
            if (userExists) {
                throw "User already exists"
            }
            salt = await bcrypt.genSalt()
            hashPw = await bcrypt.hash(password, salt)
            let newUser = await User.create({
                name,
                email,
                password: hashPw
            })

            return res.json(newUser)
        } catch(err) {
            return res.status(400).json({
                error: err
            })
        }

    }

}

module.exports = UserController