const express = require('express')

const Movie = require('../models/movie')

const router = express.Router()

// Routes
router.get('/', (req, res, next) => {
  Movie.find({}, (err, data) => {
    if (err) {
      next()
      return
    }
    const movies = {
      movies: data
    }
    res.render('movies/index', movies)
  })
})

router.get('/:id', (req, res, next) => {
  const movieID = req.params.id
  Movie.findById(movieID, (err, data) => {
    if (err) {
      next()
      return
    }
    const movieData = { movieData: data }
    res.render('movies/show', movieData)
  })
})

router.get('/new', (req, res, next) => {
  res.render('movies/new')
})

router.post('/', (req, res, next) => {
  let newMovieInfo = {
    name: req.body.name,
    genre: req.body.genre,
    plot: req.body.plot
  }

  let newMovie = new Movie(newMovieInfo)
  newMovie.save(err => {
    if (err) {
      next()
    }
    res.redirect('/movies')
  })
})

// !Routes

module.exports = router
