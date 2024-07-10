const Receipe = require("../models/Receipe");
const mongoose = require("mongoose");

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
            let id = req.params.id
            if(!mongoose.Types.ObjectId.isValid(id)){
                return res.status(400).json({
                    message: "Not a valid ID"
                })
            }
            let singleReceipe = await Receipe.findById(id)
            if(!singleReceipe) {
                return res.status(404).json({
                    message: "Receipe not found"
                })
            }
            return res.json({
                singleReceipe
            });
        }catch {
            return res.status(500).json({
                message: "Internet Server Error"
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