const  express = require('express');
const router = express.Router();
const BlogController = require('../controllers/BlogController');


// Route to get all blogs
router.get('',BlogController.index);

    // Route to create a blog
    router.get('/create',BlogController.create);
    router.post('',BlogController.store);
    // Route to get the blog by id
    router.get(`/:id`,BlogController.find)
    // Route to delete the blog by id
    router.post(`/:id/delete`,BlogController.delete)


module.exports = router