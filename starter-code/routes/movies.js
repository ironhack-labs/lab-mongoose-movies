const express = require("express");
const Movie = require ("../models/Movie.model.js");
const router = express.Router();

//SHOW MOVIES
router.get("/", (req, res, next) => {
  Movie.find({})
  .then((movies) => {
    res.render("movies/index", { movies })
  })
  .catch((error) => console.error(error));
})

module.exports = router;