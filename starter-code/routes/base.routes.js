const express = require('express')
const router = express.Router()

const Celebrity = require('../models/celebrity.model')
const Movie = require('../models/movies.models')
// Endpoints
router.get('/', (req, res) => res.render('index'))
router.get('/listado', (req, res) => {
  Celebrity.find()
    .then(celebrity => res.render('celebrity-list', { celebrity }))
    .catch(err => console.log("Error :", err))  
})

router.get('/detalles/:id', (req, res) => {

  const id = req.params.id

  Celebrity.findById(id)
    .then(celebrityDetails => res.render('celebrity-details', celebrityDetails))
    .catch(err => console.log("ERRORR", err))
})

router.get('/crear', (req, res) => res.render('new-celebrity'))

router.post('/crear', (req, res) => {

  const { name, occupation, catchPhrase } = req.body
  
  Celebrity.create({ name, occupation, catchPhrase })
    .then(() => res.redirect('/listado'))
    .catch(err => console.log("Error : ", err))
})

router.get('/delete/:id', (req, res) => {
  const id = req.params.id

  Celebrity.findByIdAndDelete(id)
    .then(() => res.redirect('/listado'))
    .catch(err => console.log("Error : ", err))
})

router.get('/edit', (req, res) => {

  const id = req.query.id

  Celebrity.findById(id)
    .then(celebrityDetails => res.render('celebrity-edit-form', celebrityDetails))
    .catch(err => console.log("Error :", err))
})

router.post('/edit/:id', (req, res) => {

  const id = req.params.id
  const { name, occupation, catchPhrase } = req.body

  Celebrity.findByIdAndUpdate(id, { name, occupation, catchPhrase })
    .then(() => res.redirect('/listado'))
    .catch(err => console.log("Error : ", err))
})

//  RUTAS PARA MOVIES

router.get('/listado-movies', (req, res) => {
  Movie.find()
    .then(movie => res.render('movies-list', { movie }))
    .catch(err => console.log("Error :", err))
})

router.get('/details/:id', (req, res) => {

  const id = req.params.id

  Movie.findById(id)
    .then(movieDetails => res.render('movie-details', movieDetails))
    .catch(err => console.log("ERRORR", err))
})

router.get('/crear-movie', (req, res) => res.render('new-movie'))

router.post('/crear-movie', (req, res) => {

  const { title, genre, plot } = req.body

  Movie.create({ title, genre, plot })
    .then(() => res.redirect('/listado-movies'))
    .catch(err => console.log("Error : ", err))
})

router.get('/delete-movie/:id', (req, res) => {
  const id = req.params.id

  Movie.findByIdAndDelete(id)
    .then(() => res.redirect('/listado-movies'))
    .catch(err => console.log("Error : ", err))
})

router.get('/edit-movie', (req, res) => {

  const id = req.query.id

  Movie.findById(id)
    .then(movieDetails => res.render('movie-edit-form', movieDetails))
    .catch(err => console.log("Error :", err))
})

router.post('/edit-movie/:id', (req, res) => {

  const id = req.params.id
  const { title, genre, plot } = req.body

  Movie.findByIdAndUpdate(id, { title, genre, plot })
    .then(() => res.redirect('/listado-movies'))
    .catch(err => console.log("Error : ", err))
})




module.exports = router
