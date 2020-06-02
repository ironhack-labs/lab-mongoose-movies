const express = require('express');
const router  = express.Router();
const Movie = require('../models/movie');
const Celebrity = require('../models/celebrity');


/* GET movies page */
router.get('/', (req, res, next) => {
  Movie.find()
  .then(allMovies => res.render("movies/index", {movies: allMovies}))
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

router.get('/:id', (req, res, next) => {
  Movie.findById(req.params.id)
  .populate('cast')
  .then(thisMovie => res.render("movies/movie-details", {thisMovie}))
  .catch(err => `Error while accessing to this movie : ${err}`)
});

router.get('/:id/edit', (req, res, next) => {
  Movie.findById(req.params.id)
  .populate('cast')
  .then(thisMovie => {
    Celebrity.find().then(celebrities => {
      res.render("movies/edit-movie", {movie: thisMovie, celebrities: celebrities})
    })
  })
  .catch(err => `Error while deleting this movie : ${err}`)
});

router.post('/:id', (req, res, next) => {
  const { title, genre, plot, cast } = req.body
  Movie.findByIdAndUpdate(req.params.id, { title, genre, plot, cast })
  .populate('cast')
  .then(thisMovie => res.redirect("/movies"))
  .catch(err => `Error while editing to this movie : ${err}`)
});

router.get('/:id/delete', (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id)
  .then(thisMovie => {
    console.log(`${thisMovie.title} has been deleted successfully`)
    res.redirect("/movies")
  })
  .catch(err => `Error while deleting this movie : ${err}`)
});

module.exports = router;