// ==================================Notes Controller====================================

var db = require("../models");

module.exports = {
    // find a single note
    findOne: function(req, res) {
        db.Notes
        .findOne(req.query)
        .then(function(dbNote) {
            res.json(dbNote);
        })
    },
    // Create a new note
    create: function(req, res) {
        db.Notes
        .create(req.body)
        .then(function(dbNotes) {
            res.json(dbNotes);
        })
    },
    // deletes a note based on ID
    delete: function(req, res) {
        db.Notes
        .remove({_id: req.params.id})
        .then(function(dbNotes) {
            res.json(dbNotes);
        })
    }
};