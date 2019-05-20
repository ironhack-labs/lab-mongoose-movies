// Requires
const express = require('express')
const router = express.Router()
// Requerimos el modelo Movie
const Movie = require('../models/Movie')



// Movies list
router.get('/', (req, res, next) => {
  Movie.find()
    .then(allMovies => res.render('movies/index', { movies: allMovies }))
    .catch(error => console.log(error))
})

// Movies detail
router.get('/list/:movie_id', (req, res, next) => {
  Movie.findById(req.params.movie_id)
    .then(theMovie => res.render('movies/movie-detail', { movie: theMovie }))
    .catch(error => console.log(error))
})


// Movie add - Get
router.get('/new', (req, res, next) => res.render('movies/new'))
// Movie add - Post
router.post('/', (req, res, next) => {
  const { title, genre, plot } = req.body
  const newMovie = new Movie({ title, genre, plot })

  newMovie.save()
    .then(theCelebrity => {
      console.log(`Una nueva pelicula fue añadida ${newMovie}`)
      res.redirect('movies')
    })
    .catch(error => {
      res.redirect('/movies/new')
      console.log(error)
    })
})


// Celebrity Delete
router.post('/list/:movie_id/delete', (req, res, next) => {
  Movie.findByIdAndDelete(req.params.movie_id)
    .then(theMovie => res.redirect('/movies'))
    .catch(error => console.log(error))
})


// Celebrity Edit - Get
router.get('/list/:movie_id/edit', (req, res, next) => {
  Movie.findById(req.params.movie_id)
    .then(theMovie => res.render('movies/movie-edit', { movie: theMovie }))
    .catch(error => console.log(error))
})
// Celebrity Edit - Post
router.post('/list', (req, res, next) => {
  const { title, genre, plot } = req.body
  Movie.update({ _id: req.query.movie_id }, { $set: { title, genre, plot } })
    .then(theMovie => {
      res.redirect('/movies')
    })
    .catch(error => console.log(error))
})





module.exports = router

