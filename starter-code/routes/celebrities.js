const express = require('express')

// require the Celebrity model here
const Celebrity = require('../models/Celebrity.model')
const Movie = require('../models/Movie.model')
const router = express.Router()

router.get('/celebrities', (req, res, next) => {
  Celebrity.find({})
    .then((celebritiesFromDB) => {
      res.render('celebrities/', { celebritiesFromDB })
      console.log(celebritiesFromDB)
    })
    .catch((error) => console.log(error))
})

router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new')
})

router.post('/celebrities/new', (req, res, next) => {
  const body = req.body
  Celebrity.create(body)
    .then(() => {
      res.redirect('/celebrities')
    })
    .catch((error) => console.log(error))
})

//SIEMPRE COLOCAR :id AL FINAL
router.get('/celebrities/:id/edit', (req, res, next) => {
  const id = req.params.id
  Celebrity.findById(id)
    .then((data) => res.render('celebrities/edit', data))
    .catch((error) => console.log(error))
})

router.post('/celebrities/:id/edit', (req, res, next) => {
  const body = req.body
  const id = req.params.id
  Celebrity.findByIdAndUpdate(id, body)
    .then(() => res.redirect('/celebrities'))
    .catch((error) => console.log(error))
})

router.get('/celebrities/:id', (req, res, next) => {
  const id = req.params.id
  Celebrity.findById(id)
    .populate('movies')
    .then((data) => {
      res.render('celebrities/show', data)
      console.log('celebridad seleccionada', data)
    })
    .catch((error) => console.log(error))
})

router.post('/celebrities/:id/delete', (req, res, next) => {
  const id = req.params.id
  const body = req.body
  Celebrity.findByIdAndDelete(id, body)
    .then(() => {
      res.redirect('/celebrities')
    })
    .catch((error) => console.log(error))
})

//MOVIES
router.get('/movies', (req, res, next) => {
  Movie.find({})
    .then((moviesFromDB) => {
      res.render('movies/', { moviesFromDB })
      console.log(moviesFromDB)
    })
    .catch((error) => console.log(error))
})

router.get('/movies/new', (req, res, next) => {
  res.render('movies/new')
})

router.post('/movies/new', (req, res, next) => {
  const body = req.body
  Movie.create(body)
    .then(() => {
      res.redirect('/movies')
    })
    .catch((error) => console.log(error))
})

//SIEMPRE COLOCAR :id AL FINAL
router.get('/movies/:id/edit', (req, res, next) => {
  const id = req.params.id
  Movie.findById(id)
    .then((data) => res.render('movies/edit', data))
    .catch((error) => console.log(error))
})

router.post('/movies/:id/edit', (req, res, next) => {
  const body = req.body
  const id = req.params.id
  Movie.findByIdAndUpdate(id, body)
    .then(() => res.redirect('/movies'))
    .catch((error) => console.log(error))
})

router.get('/movies/:id', (req, res, next) => {
  const id = req.params.id
  Movie.findById(id)
    .then((data) => {
      res.render('movies/show', data)
      console.log('celebridad seleccionada', data)
    })
    .catch((error) => console.log(error))
})

router.post('/movies/:id/delete', (req, res, next) => {
  const id = req.params.id
  const body = req.body
  Movie.findByIdAndDelete(id, body)
    .then(() => {
      res.redirect('/movies')
    })
    .catch((error) => console.log(error))
})

module.exports = router
