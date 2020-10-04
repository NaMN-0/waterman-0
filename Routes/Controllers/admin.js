const express = require("express");
const router = express.Router();
const all = require("./../../Models/all");

router.get("/", function(req, res) {
    res.render("admin", {
        layout: false,
        msg: "",
        status: true
    });
});

router.post("/", function(req, res) {
    console.log(req.body)
    if (req.body.username === "naman" && req.body.password === "1234") {
        console.log("in it")
        all()
            .then(function(data) {
                console.log(data)
                res.render("admin", {
                    layout: false,
                    data: data.data,
                    msg: "",
                    status: false
                });
            })
            .catch(function(err) {
                res.render("admin", {
                    layout: false,
                    msg: "Fetch failed",
                    status: true
                });
            });
    } else {

    }
});

module.exports = router;