const express = require('express')
const router = express.Router()

const Movie = require('./../models/movie-model')

//Listing all Movie documents on an index page

router.get('/', (req, res, next) => {
  Movie.find()
  .then((allMovies) => {
    res.render("movies/index", {allMovies})
  }).catch((err) => {
    console.log(
      'An error ocurred when fetching all Movie documents from the DB: ',
      err
    )
    next()
  });
})

module.exports = router