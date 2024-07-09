const express = require("express");
const ReceipeController = require("../controllers/ReceipeController");
const {body} = require("express-validator");
const  handleErrorMessage  = require("../middlewares/handleErrorMessage");

const router = express.Router();

// GET RECIPES
router.get("", ReceipeController.index);
// POST RECIPE
router.post("", [
    body('title').notEmpty(),
    body('description').notEmpty(),
    body('ingredients').notEmpty().isArray({min:2})
    ],handleErrorMessage, ReceipeController.store);
// GET SINGLE RECIPE
router.get("/:id", ReceipeController.show);
// DELETE RECIPE
router.delete("/:id",ReceipeController.destroy)
// PATCH RECIPE\
router.patch("/:id",ReceipeController.update)

module.exports = router;