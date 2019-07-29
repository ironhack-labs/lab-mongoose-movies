const express = require('express')
const router = express.Router()

const Movie = require('../models/Movie.model')


// Listado de libros
router.get('/', (req, res, next) => {
  Movie.find({})
    .then(allTheMovies => res.render('movies/index', { movies: allTheMovies }))  // ojo! pasar obj
    .catch(err => console.log('Hubo un error:', err))
})


// Detalle de libro
router.get('/show/:id', (req, res, next) => {
  const movieId = req.params.id
  Movie.findById(movieId)
    .populate('cast')
    .then(theWholeMovie => res.render('movies/show', { movie: theWholeMovie }))
    .catch(err => console.log('Hubo un error:', err))
})


// Creación de nuevo libro
router.get('/create', (req, res, next) => res.render('books-add'))
router.post('/create', (req, res, next) => {

  const { title, genre, plot, cast } = req.body

  Movie.create({ author, description, rating, title })
    .then(() => res.redirect('/books/list'))
    .catch(err => console.log('Hubo un error:', err))
})



// Edición de libro
router.get('/edit', (req, res, next) => {
  //console.log(req.query)
  Book.findById(req.query.bookId)
    .then(theBook => res.render('book-edit', { theBook }))
    .catch(err => console.log('Hubo un error:', err))
})
router.post('/edit', (req, res, next) => {

  const { author, description, rating, title } = req.body

  // Todos los métodos de actualizar pueden recibir {new: true} como último argumento opcional, retornando el nuevo elemento y no el previo al update
  Book.findByIdAndUpdate(req.query.bookId, { $set: { title, author, description, rating } }, { new: true })
    .then(theNewBook => {
      console.log(theNewBook)
      res.redirect('/books/list')
    })
    .catch(err => console.log('Hubo un error:', err))
})

module.exports = router





















router.get('/detail/:id', (req, res, next) => {
  const movieId = req.params.id
  Movie.findById(movieId)
    .populate('cast')
    .then(theWholeMovie=> res.render('movie-detail', { movie: theWholeMovie }))
    .catch(err => console.log('Hubo un error:', err))
})