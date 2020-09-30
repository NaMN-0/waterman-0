const express = require("express");
const router = express.Router();

router.get("/", function(req, res) {
  res.render("services", {
    layout: false
  });
});

module.exports = router;