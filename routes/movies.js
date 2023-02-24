var express = require('express');
var router = express.Router();
var moviesController = require("../controllers/moviesController.js");

//Create
router.get("/create", moviesController.create);

//Home & Pages
router.get("/", moviesController.home);
router.get("/detail/:id", moviesController.detail);
router.get("/detail-serie/:id", moviesController.detailSerie);
router.get("/popular", moviesController.moviePopular);
router.get("/popular-today", moviesController.popularToday);
router.get("/recommended", moviesController.recommended);
router.get("/news", moviesController.news);
router.post("/search", moviesController.search);


module.exports = router;