var express = require("express");
const dotenv = require("dotenv").config();
var PORT = process.env.PORT || 8080;
var app = express();

// Serve static content from the public directory 
app.use(express.static("public"));
app.use(express.static("images"));


// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// setting handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Importing routes and providing access to the server
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
});