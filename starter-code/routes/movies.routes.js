const express = require('express')
const router = express.Router()

const Movie = require('../models/movie.model')

router.get('/', (req, res, next) => {
  Movie.find()
    .then(allMovies => res.render('movies/index', { movies: allMovies }))
    .catch(err => console.log(`Error al renderizar la pagina de movies`))
})

// FORMULARIO, CREAR PELICULAS NUEVAS
router.get('/new', (req, res) => res.render('movies/new'))
router.post('/', (req, res) => {
  // const { name, occupation, catchPhrase } = req.body

  Movie.create(req.body)
    .then(() => res.redirect('/movies'))
    .catch(() => res.render('/new'))
})

// ELIMINAR LOS DATOS
router.post('/:id/delete', (req, res) =>
  Movie.findByIdAndRemove(req.params.id)
    .then(() => res.redirect('/movies'))
    .catch(err => console.log(`Ha habido un error al borrar los datos: ${err}`))
)


// EDIT LOS DATOS
router.get('/:id/edit', (req, res) => {
  Movie.findById(req.params.id)
    .then(movie => res.render('movies/edit', movie))
    .catch(err => console.log(`Ha habido un error al editar los datos: ${err}`))
})
router.post('/:id', (req, res, next) => {
  Movie.findByIdAndUpdate(req.params.id, req.body)
    .then(movie => res.render('movies/show', movie))
    .catch(err => console.log(`Error al encontrar el ID en la pagina del detalle de la pelicula`))
})

// ENCONTRAR EL ID
router.get('/:id', (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movie => res.render('movies/show', movie))
    .catch(err => console.log(`Error al encontrar el ID en la pagina del detalle de la movie`))
})
module.exports = router