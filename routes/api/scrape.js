var router = require("express").Router();
var scrapeController = require("../../controllers/scrape");

router.get("/", scrapeController.scrapeArticles);

module.exports = router;