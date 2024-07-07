const express = require("express");
const ReceipeController = require("../controllers/ReceipeController");


const router = express.Router();

// GET RECIPES
router.get("", ReceipeController.index);
// POST RECIPE
router.post("", ReceipeController.store);
// GET SINGLE RECIPE
router.get("/:id", ReceipeController.show);
// DELETE RECIPE
router.delete("/:id",ReceipeController.destroy)
// PATCH RECIPE\
router.patch("/:id",ReceipeController.update)

module.exports = router;