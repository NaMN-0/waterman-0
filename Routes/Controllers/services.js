const express = require("express");
const router = express.Router();

router.get("/", function(req, res) {
    res.render("services", {
        layout: false
    });
});

router.post("/", function(req, res) {
    console.log("post request correct")
    console.log(req.body)
    res.redirect("/")
});

module.exports = router;