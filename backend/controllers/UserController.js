// import User from "../models/User";

const UserController = {
    login: (req, res)=>{
        return res.json({message: "login"})
    },

    register: (req, res)=>{
        return res.json({ message: "register" })
    }

}

module.exports = UserController