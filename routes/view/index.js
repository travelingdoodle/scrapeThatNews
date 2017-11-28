let router = require("express").Router();

// Route to render the index page
router.get("/", function(req, res) {
    res.render("index");
})

// renders the handlebars page with the saved articles
router.get("/saved", function(req, res) {
    res.render("saved");
})

module.exports = router;