var express = require('express');
var homeController = require("../controllers/homeController.js");
var router = express.Router();

/* GET home page. */
router.get("/", homeController.home);
router.get("/about", homeController.about);

module.exports = router;
