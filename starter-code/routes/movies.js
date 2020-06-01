const express = require("express");
const router = express.Router();
const Movies = require("../models/movies");

//Movies List
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

//GET movie info
router.get("/:id", (req, res, next) => {
  Movies.findById(req.params.id)
    .then((movie) => {
      res.render("movies/show", movie);
    })
    .catch((err) => {
      console.log("An error has occurred while charge the movie info", err);
      next();
    });
});

module.exports = router;
