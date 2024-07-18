const User =  require("../models/User");


const UserController = {
    login: (req, res)=>{
        return res.json({message: "login"})
    },

    register: async(req, res)=>{
        try{
            let { name, email, password } = req.body
            let user = await User.register(name,email,password)


            return res.json(user)
        } catch(err) {
            return res.status(400).json({
                error: err
            })
        }

    }

}

module.exports = UserController