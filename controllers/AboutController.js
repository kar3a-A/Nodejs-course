

const AboutController = {
    index: (req, res) => {
        // Render the about page with a title
        res.render('about',
            {
                title: 'About Page'
            }
        );
    },
}

module.exports = AboutController