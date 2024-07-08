const Receipe = require("../models/Receipe");

const ReceipeController = {

    index: (req, res) => {
        return res.json({
            message: "Get receipe"
        });
    },
    store: async(req, res) => {
        try{
            const {title,description,ingredients}=req.body
            const newReceipe = await Receipe.create({
                title,
                description,
                ingredients
            })
            return res.json(newReceipe);
        }catch(err){
            return res.status(400).json({
                message: "Invalid fields"
            })
        }
    },
    show: (req, res) => {
        return res.json({
            message: "get single receipe"
        });
    },
    destroy: (req, res) => {
        return res.json({
            message: "delete single receipe"
        });
    },
    update: (req, res) => {
        return res.json({
            message: "update single receipe"
        });
    }
}

module.exports = ReceipeController