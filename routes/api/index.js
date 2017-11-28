let router = require("express").Router();
let scrapeRoute = require('./scrape');
let notesRoute = require('./notes');
let articlesRoute = require('./articles');

router.use("/scrape", scrapeRoute);
router.use("/notes", notesRoute);
router.use("/articles", articlesRoute);

module.exports = router;