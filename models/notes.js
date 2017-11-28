// Notes model

// Require mongoose
var mongoose = require("mongoose");

// Creates a schema class
var Schema = mongoose.Schema;

// creates noteSchema with the schema object
var noteSchema = new Schema({
  _articleID: {
    type: Schema.Types.ObjectId,
    ref: "Article"
  },
  date: {
    type: Date,
    default: Date.now
  },
  noteBody: {
    type: String
  }
});

// This creates a model from the schema, using mongoose's model method
let Note = mongoose.model("Note", noteSchema);

// Exports Note Model
module.exports = Note;