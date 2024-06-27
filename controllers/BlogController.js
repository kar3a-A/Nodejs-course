const { create } = require('lodash');
const Blog = require('../models/Blogs');

const BlogController = {
    index: async (req, res) => {
        // Find all blogs and sort them by createdAt in descending order
        let blogs = await Blog.find().sort({createdAt:-1});
        // Render the blogs page with the blogs and a title
        res.render('blogs',
            {
                blogs,
                title: 'Blogs Page'
            }
        );
    },
    store: async (req, res) => {
        // Get the blog title, intro, and body from the request body
        let {blogTitle,blogIntro,blogBody} = req.body
        // Create a new blog with the provided information
        let blog = new Blog({
            title: blogTitle,
            intro: blogIntro,
            body: blogBody
        });
        // Save the blog to the database
        await blog.save();
        console.log('~~~  Blog saved in db  ~~~');
        // Redirect to the blogs page
        res.redirect('/blogs');
    },
    find: async(req,res,next)=>{
        try {
            let id = req.params.id
            let blog = await Blog.findById(id)
            console.log(blog)
            res.render('blogs/show',{
                blog,
                title: 'Blog details'
            })
        } catch(err){
            console.log(err)
            next()
        }
        },
    delete: async(req,res,next)=>{
        try {
            let id = req.params.id
            await Blog.findByIdAndDelete(id)
            console.log('~~~  Blog deleted in db  ~~~');
            res.redirect('/blogs')

        } catch(err){
            console.log(err)
            next()
        }

    },
    create:  (req, res) => {
        // Render the create blog page with a title
        res.render('blogs/create',
            {
                title: 'Create Blog'
            }
        );
    }
}

module.exports = BlogController