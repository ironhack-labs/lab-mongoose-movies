const express = require('express')
const router = express.Router()

const Movie = require('./../models/movie-model')

//Listing all Movie documents on an index page

router.get('/', (req, res, next) => {
  Movie.find()
    .then((allMovies) => {
      res.render('movies/index', { allMovies })
    })
    .catch((err) => {
      console.log(
        'An error ocurred when fetching all Movie documents from the DB: ',
        err
      )
      next()
    })
})

router.get('/:movieId', (req, res, next) => {
  Movie.findById(req.params.movieId)
    .then((movie) => {
      res.render('movies/show', movie)
    })
    .catch((err) => {
      console.log(
        'An error ocurred when fetching an specific movie by ID: ',
        err
      )
      next()
    })
})

//CREATE

router.get('/new', (req, res, next) => res.render('movies/new'))

router.post("/new", (req, res, next) => {
  const {title, genre, plot} = req.body
  console.log("requirement made: ", req.body)
  Movie.create({title, genre, plot})
  .then(() => {
    res.redirect("/movies")
  }).catch((err) => {
    console.log('An error ocurred when generating a movie: ', err)
    res.redirect('/new')
  });
})

module.exports = router
