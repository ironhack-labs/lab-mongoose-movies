const express = require('express')
const router = express.Router()

const Movie = require('../models/movies.model')


// GET
router.get('/', (req, res) =>
  Movie.find()
  .then(movies => res.render('movies/index', {
    movies: movies
  }))
  .catch(err => console.log(`Error mostrando las peliculas ${err}`))
)

router.get('/new', (req, res) => res.render('movies/new'))

router.get('/:id', (req, res) =>
  Movie.findById(req.params.id)
  .then(movie => res.render('movies/show', movie))
  .catch(err => console.log(`Error mostrando las peliculas ${err}`))
)
router.get('/:id/edit', (req, res) =>
  Movie.findById(req.params.id)
  .then(movie => res.render('movies/edit', movie))
)
// POST
router.post('/', (req, res) =>
  Movie.create(req.body)
  .then(() => res.redirect('/movies'))
  .catch(err => {
    console.log(`Error al introducir el celebrity: ${err}`)
    res.render('celebrities/new', {
      error: "Error to create new celebrity"
    })
  })
)
router.post('/:id/delete', (req, res) =>
  Movie.findByIdAndDelete(req.params.id)
  .then(() => res.redirect('/movies'))
  .catch(err => console.log(`Error al eliminar de la base de datos: ${err}`))
)
router.post('/:id', (req, res) =>
  Movie.findByIdAndUpdate(req.params.id, req.body)
  .then(() => res.redirect('/movies'))
  .catch(err => console.log(`Error al editar la base de datos: ${err}`))

)
module.exports = router