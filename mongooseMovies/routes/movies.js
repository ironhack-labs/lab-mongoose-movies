const express = require('express')

const Movie = require('../models/movie')

const router = express.Router()

// Routes
router.get('/', (req, res, next) => {
  Movie.find({}, (err, data) => {
    if (err) {
      return next(err)
    }
    const movies = {
      movies: data
    }
    res.render('movies/index', movies)
  })
})

router.get('/new', (req, res, next) => {
  res.render('movies/new')
})

router.get('/:id', (req, res, next) => {
  const movieID = req.params.id
  Movie.findById(movieID, (err, data) => {
    if (err) {
      return next(err)
    }
    const movieData = { movieData: data }
    res.render('movies/show', movieData)
  })
})

router.post('/', (req, res, next) => {
  let newMovieInfo = {
    title: req.body.name,
    genre: req.body.genre,
    plot: req.body.plot
  }
  console.log(newMovieInfo)
  let newMovie = new Movie(newMovieInfo)
  newMovie.save(err => {
    if (err) {
      return next(err)
    }
    res.redirect('/movies')
  })
})

router.post('/:id/delete', (req, res, next) => {
  const movieIdToDelete = req.params.id
  console.log(movieIdToDelete)
  Movie.findByIdAndRemove(movieIdToDelete, (err, data) => {
    if (err) {
      return next(err)
    }
    res.redirect('/movies')
  })
})

router.get('/:id/edit', (req, res, next) => {
  const movieIDToEdit = req.params.id
  Movie.findById(movieIDToEdit, (err, data) => {
    if (err) {
      return next(err)
    }
    res.render('movies/edit', { movieData: data })
  })
})

router.post('/:id', (req, res, next) => {
  const movieUpdatedInfo = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  }
  const movieIDToUpdate = req.params.id
  Movie.findByIdAndUpdate(movieIDToUpdate, movieUpdatedInfo, (err, data) => {
    if (err) {
      return next(err)
    }
    res.redirect('/movies')
  })
})

// !Routes

module.exports = router
