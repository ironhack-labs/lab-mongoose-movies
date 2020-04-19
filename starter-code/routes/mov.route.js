const express = require('express')
const router = express.Router() 


const Movie = require('../model/movie-model')

//Get movies
router.get('/', (req, res, next) => {
  Movie.find()
    .then(moviesCreated => res.render('movies/mov-index', {moviesCreated}))
    .catch(err => console.log(err))
})

//Show each movie
router.get('/show/:id', (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movieId => res.render('movies/mov-show', movieId))
    .catch(err => console.log(err))
})

//Add movie
router.get('/new', (req, res, next) => res.render('movies/add-movie'))
router.post('/', (req, res, next) => {
  const { title, plot, genre, photo } = req.body

  Movie.create({ title, plot, genre, photo })
    .then(res.redirect('/movies'))
    .catch(err => console.log(err))
  
})

//Delete movie
router.post('/:id/delete', (req, res, next) => {
  Movie.findByIdAndDelete(req.params.id)
    .then(res.redirect('/movies'))
    .catch(err => console.log(err))
})

//Edit movie
router.get('/:id/edit', (req, res, next) => {

  Movie.findById(req.params.id)
    .then(movieToEdit => res.render('movies/mov-edit', movieToEdit))
    .catch(err => console.log(err))
})

router.post('/:id/edit', (req, res, next) => {
  const { title, genre, plot, photo } = req.body

  Movie.findByIdAndUpdate(req.params.id, { title, genre, plot, photo }, { new: true })
    .then(res.redirect('/movies'))
    .catch(err => console.log(err))
})



module.exports = router