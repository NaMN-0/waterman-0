const express = require("express");
const app = express();
const router = require("./Controllers");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("Public"));

app.use(router);

module.exports = app;
