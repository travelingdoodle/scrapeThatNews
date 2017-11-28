/*==================================Dependencies====================================*/
var express = require("express");
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
// var mongojs = require("mongojs");

// Set up port for host or default to 3000
var PORT = process.env.PORT || 3000;

// Initialize Express
var app = express();

// require routes (thanks, Cam. Thanks. A. lot. I learned soooooo much.)
var routes = require("./routes");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// ********** IF looking @ this, can you tell me if the order of these things really makes a difference, becasue it doesn't seem to make a diff and I'm curious *********

// Parse application
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//register a Handlebars view engine and connect it to the express app
// TBH tho, no one wanna use this
app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  partialsDir: path.join(__dirname, "/views/layouts/partials")
}));
app.set('view engine', 'handlebars');

// All requests go through the routes middleware
app.use(routes);

// use either the deployed heroku db or the local version
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/scrapedData"

// connects to Monogo DB and use ES6 promises
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
  useMongoClient: true
})


// Listening on port...
app.listen(PORT, function () {
  console.log("App running on port: " + PORT);
});
