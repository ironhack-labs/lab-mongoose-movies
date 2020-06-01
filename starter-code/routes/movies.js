const express = require("express");
const router = express.Router();
const Movies = require("../models/movies");

router.get("/", (req, res, next) => {
  Movies.find()
    .then((movie) => {
      res.render("movies/index", { list: movie });
    })
    .catch((err) => {
      console.log("Error when get Movies list", err);
      next();
    });
});

module.exports = router;
