// ==================================Scrape Controller====================================

var db = require('../models');
var scrape = require("../scripts/scrape");

module.exports = {
    scrapeArticles: function (req, res) {
        return scrape()
            .then(function (articles) {
                return db.title.create(articles);
            })
            .then(function (dbTitle) {
                if (dbTitle.length === 0) {
                    res.json({
                        message: "No articles have been scraped. Bummer, guy!"
                    })
                }
                else {
                    res.json({
                        message: "Added" + dbTitle.length + " new articles. So, that's cool"
                    })
                }
            })
            .catch(function (err) {
                res.json({
                    message: "Scrape completed"
                })
            })
    }
}