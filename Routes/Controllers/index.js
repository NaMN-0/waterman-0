const express = require("express");
const router = express.Router();
const home = require("./home");
const about = require("./about");
const services = require("./services");
const gallery = require("./gallery");
const contactUs = require("./contactUs");
const admin = require("./admin");

router.use("/", home);
router.use("/about", about);
router.use("/services", services);
router.use("/gallery", gallery);
router.use("/contact-us", contactUs);
router.use("/admin", admin);

module.exports = router;