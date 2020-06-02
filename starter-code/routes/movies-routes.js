const express = require('express');
const router  = express.Router();
const Movie = require('../models/movie');
const Celebrity = require('../models/celebrity');


/* GET movies page */
router.get('/', (req, res, next) => {
  Movie.find()
  .then(allMovies => {
    console.log(allMovies)
    res.render("movies/index", {movies: allMovies})
  })
  .catch(err => `There was an error : ${err}`)
});

router.get('/new', (req, res, next) => {
  Celebrity.find().then(celebrity => res.render("movies/new-movie", {celebrity}))
  .catch(err => `Error while creating this movie : ${err}`)
});

router.post('/create', (req, res, next) => {
  const { title, genre, plot, cast } = req.body
  const newMovie = new Movie({ title, genre, plot, cast })
  newMovie.save()
  .then(movie => {
    console.log("New movie successfully created!")
    res.redirect("/movies")
  })
  .catch(err => {
    console.log(`Error while creating this movie: ${err}`)
    res.render("movies/new-movie")})
});

module.exports = router;