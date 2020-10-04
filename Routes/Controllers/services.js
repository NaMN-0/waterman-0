const express = require("express");
const router = express.Router();
const saver = require("./../../Models/saver");

router.get("/", function(req, res) {
    res.render("services", {
        layout: false
    });
});

router.post("/", function(req, res) {
    saver(req.body)
        .then(function() {
            res.render("services", {
                layout: false,
                msg: "Form submitted"
            });
        })
        .catch(function() {
            res.render("services", {
                layout: false,
                msg: "Form submittion failed"
            });
        });
});

module.exports = router;