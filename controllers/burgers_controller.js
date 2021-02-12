var express = require("express");
var router = express.Router();

// Import the model to use its database functions.
var burger = require("../models/burger");

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

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);
//updates when a burger is eaten
    burger.update({
            eaten: req.body.eaten
        },
        condition,
        function(result) {
        // If no rows were changed it will send a 404 error
            if (result.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();

        }
    );
});

// Exporting the routes for server.js
module.exports = router;