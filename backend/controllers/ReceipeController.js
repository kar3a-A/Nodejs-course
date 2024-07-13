const Receipe = require("../models/Receipe");
const mongoose = require("mongoose");

const ReceipeController = {

    index: async(req, res) => {
        let limit = 6;
        let page = req.query.page || 1;
        let receipes = await Receipe
            .find()
            .skip((page-1)*limit)
            .sort({createdAt: -1})
            .limit(limit)

        return res.json({

            receipes
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
        try {
            let id = req.params.id
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({
                    message: "Not a valid ID"
                })
            }
            let singleReceipe = await Receipe.findByIdAndDelete(id)
            if (!singleReceipe) {
                return res.status(404).json({
                    message: "Receipe not found"
                })
            }
            return res.json({
                singleReceipe
            });
        } catch {
            return res.status(500).json({
                message: "Internet Server Error"
            })
        }


    },
    update: async(req, res) => {
        try {
            let id = req.params.id
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({
                    message: "Not a valid ID"
                })
            }
            let singleReceipe = await Receipe.findByIdAndUpdate(id,{
                ...req.body
            })

            if (!singleReceipe) {
                return res.status(404).json({
                    message: "Receipe not found"
                })
            }
            return res.json({
                singleReceipe
            });
        } catch {
            return res.status(500).json({
                message: "Internet Server Error"
            })
        }

    }
}

module.exports = ReceipeController