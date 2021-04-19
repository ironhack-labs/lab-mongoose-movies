const express = require("express");
const Celebrity = require("../models/Celebrity.model.js");
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



//SHOW MOVIE DETAILS
router.get("/:id", (req, res, next) => {
  const {id} = req.params;
  Movie.findById(id)
  .then((movie) => {
    res.render("movies/show", movie);
  })
  .catch((error) => console.error(error))
})

module.exports = router;