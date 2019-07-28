const express = require('express')
const router = express.Router()

const Movie = require('../models/movie-model')


// Listado de films
router.get('/list', (req, res, next) => {
  Movie.find({})
    .then(allTheMovies => res.render('movies-list', { movies: allTheMovies }))  // ojo! pasar obj
    .catch(err => console.log('Hubo un error:', err))
})

// Detalles del film
router.get('/detail/:id', (req, res, next) => {
  const movieId = req.params.id
  Movie.findById(movieId)
    .then(theWholeMovie => res.render('movies-detail', { movies: theWholeMovie }))
    .catch(err => console.log('Hubo un error:', err))
})


// Añadir film
router.get('/create', (req, res, next) => res.render('movies-add'))
router.post('/create', (req, res, next) => {

  const { title, genre, rate } = req.body

  Movie.create({ title, genre, rate })
    .then(() => res.redirect('/movies/list'))
    .catch(err => console.log('Hubo un error:', err))
})

// Edición datos de films
router.get('/edit', (req, res, next) => {
  //console.log(req.query)
  Movie.findById(req.query.movieId)
    .then(theMovie => res.render('movies-edit', { theMovie }))
    .catch(err => console.log('Hubo un error:', err))
})
router.post('/edit', (req, res, next) => {

  const { title, genre, rate } = req.body

  // Todos los métodos de actualizar pueden recibir {new: true} como último argumento opcional, retornando el nuevo elemento y no el previo al update
  Movie.findByIdAndUpdate(req.query.movieId, { $set: { title, genre, rate } }, { new: true })
    .then(theNewMovie => {
      console.log(theNewMovie)
      res.redirect('/movies/list')
    })
    .catch(err => console.log('Hubo un error:', err))
})

// Eliminar película
router.get('/delete', (req, res, next) => {
  //console.log(req.query)
  Movie.findById(req.query.movieId)
    .then(theMovie => res.render('movies-delete', { theMovie }))
    .catch(err => console.log('Hubo un error:', err))
})
router.post('/delete', (req, res, next) => {

  const { title, genre, rate } = req.body

  Movie.findByIdAndRemove(req.query.movieId, { $set: { title, genre, rate } })
    .then(theNewMovie => {
      console.log(theNewMovie)
      res.redirect('/movies/list')
    })
    .catch(err => console.log('Hubo un error:', err))
})

module.exports = router