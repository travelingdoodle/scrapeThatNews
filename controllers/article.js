// ==================================Article Controller====================================
var db = require("../models");
var scrape = require("../scripts/scrape");

module.exports = {
    // Find all articles, and sort them by date
    findAll: function(req, res) {
        db.Articles
        .find(req.query)
        .sort({ date: -1})
        .then(function(dbArticles) {
            res.json(dbArticles)
        })
    },
    delete: function(req, res) {
        db.Articles.remove({ _id: req.params.id})
        .then(function(dbArticles) {
            res.json(dbArticles)
        })
    },
    update: function(req, res) {
        db.Articles.findOneAndUpdate({ _id: req.params.id}, { $set: req.body}, {new: true})
        .then(function(dbArticles){
            res.json(dbArticles)
        })
    }
}