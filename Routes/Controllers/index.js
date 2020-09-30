const express = require("express");
const router = express.Router();
const home = require("./home");
const about = require("./about");
const services = require("./services");
const gallery = require("./gallery");
const contactUs = require("./contactUs");

router.use("/", home);
router.use("/about", about);
router.use("/services", services);
router.use("/gallery", gallery);
router.use("/contact-us", contactUs);

module.exports = router;
