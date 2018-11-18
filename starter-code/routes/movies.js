const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie")


/* GET home page */
router.get('/', (req, res) => {
  res.render('index');
});
router.get("/movies", (req, res) => {
  Movie.find()
    .then((movies) => {
      console.log(movie)
      res.render("movies", { movies })
    })
    .catch((err) => {
      console.log("error while listing movies" + err)
    })
})


router.get("/movies/:id", (req, res) => {
  Movie.findById(req.params.id)
    .then((movie) => {
      res.render("./movies/show", {movie})
    })
    .catch((err) => {
      console.log("error while listing individual movies" + err)
    })
})

module.exports = router;

