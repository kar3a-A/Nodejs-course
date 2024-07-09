const Receipe = require("../models/Receipe");

const ReceipeController = {

    index: async(req, res) => {
        let receipes = await Receipe.find().sort({createdAt: -1})
        return res.json({

            message: res.json(receipes)
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
    show: async(req, res) => {
        try {
            let singleReceipe = await Receipe.findById(req.params.id)
            return res.json({
                message: res.json(singleReceipe)
            });
        }catch {
            return res.status(404).json({
                message: "Receipe not found"
            })
        }

    },
    destroy: async(req, res) => {
        try{
            let destroyReceipe = await Receipe.findByIdAndDelete(req.params.id)
            return res.json({
                message: res.json(destroyReceipe)
            });
        }catch{
            return res.status(404).json({
                message: "Receipe not found & deleting process fail"
            })
        }

    },
    update: (req, res) => {
        return res.json({
            message: "update single receipe"
        });
    }
}

module.exports = ReceipeController