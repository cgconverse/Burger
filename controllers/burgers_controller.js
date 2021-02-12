var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Creating the routes 
router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.create(["name", "eaten"], [req.body.name, req.body.eaten], function(result) {
        // Send back the ID of the new burger
        res.json({ id: result.insertId });
    });
});