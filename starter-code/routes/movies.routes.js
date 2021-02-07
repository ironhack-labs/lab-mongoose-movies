const express = require('express')
const router = express.Router()

const Movie = require('../models/movie')
const Celebrity = require('../models/celebrity')

// índice de movies
router.get('/', (req, res) => {

  Movie
    .find()
    .then(movies => res.render('movies/index', { movies }))
    .catch(err => console.log(err))
})

// página de cada movie
router.get('/:id/:name', (req, res) => {

  Movie
    .findById(req.params.id)
    .then(movie => res.render('movies/show', { movie }))
    .catch(err => console.log(err))
})

// enlace a la celeb
router.get('/:name', (req, res) => {

  const noCelebMsg = {
    message: "is not in the database, would you like to create it?",
    name: req.params.name
  }

  Celebrity
    .findOne({ name: req.params.name })
    .then(celeb => {
      !celeb ?
        res.render(res.render('celebrities/new', { noCelebMsg }))
        : res.render('celebrities/show', { celeb })
    })
    .catch(err => console.log(err))
})

// formulario para añadir movie
router.get('/new', (req, res) => res.render('movies/new'))
router.post('/new', (req, res) => {

  const castString = req.body.cast
  const cast = castString.split(",")

  const { title, genre, plot } = req.body
  const newMovie = new Movie({ title, genre, cast, plot })

  newMovie
    .save()
    .then(() => res.redirect('/movies'))
    .catch(err => console.log(err))
})

// editar movie
router.get('/:id/:title/edit', (req, res) => {

  Movie
    .findById(req.params.id)
    .then(movie => res.render('movies/edit', { movie }))
    .catch(err => console.log(err))
})

router.post('/:id/:title/edit', (req, res) => {

  const castString = req.body.cast
  const cast = castString.split(",")

  const { title, genre, plot } = req.body

  Movie
    .findByIdAndUpdate(req.params.id, { title, genre, cast, plot }, { new: true })
    .then(movie => res.render('movies/show', { movie }))
    .catch(err => console.log(err))
})

// eliminar movie
router.post('/:id/delete', (req, res) => {

  Movie
    .findByIdAndRemove(req.params.id)
    .then(() => res.redirect('/movies'))
    .catch(err => console.log(err))
})

module.exports = router