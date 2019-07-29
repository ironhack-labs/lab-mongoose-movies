const express = require('express')
const router = express.Router()

const Movie = require('../models/movie.model')
const Celebrity = require('../models/celebrity.model')

router.get('/list', (req, res, next) => {
  Movie.find({})
  .then(movies => res.render('movies-index', {movies}))
  .catch(err => console.log('Hubo un error:', err))
})

router.get('/add', (req, res, next) => {
  Celebrity.find({})
    .then(celebs => res.render('create-movie', {celebs}))
    .catch(err => console.log('Hubo un error:', err))
})

router.post('/add', (req, res, next) => {

  const {title, genre, plot, celebrity} = req.body
  

  Celebrity.findOne({name: celebrity})
  .populate('celebrity')
    .then(celeb => {
      console.log(celeb)
      Movie.create({title, genre, plot, celebrity: celeb._id})
      .then(() => res.redirect('/movies/list'))
    })
    .catch(err => console.log('Hubo un error:', err))
    
  
    
})

router.get('/delete/:id', (req, res, next) =>{
  const movieId = req.params.id
  //console.log("mycelebid ",celebId)

  Movie.findOneAndDelete({_id: movieId})
     .then(() => res.redirect('/movies/list'))
})

router.get('/edit', (req, res, next) => {
  Movie.findById(req.query.movieId)
  .then(movie => res.render('movies-edit', {movie}))
  .catch(err => console.log('Hubo un error:', err))
})
router.post('/edit', (req, res, next) => {

  const {title, genre, plot, celebrity} = req.body

  Movie.findByIdAndUpdate(req.query.movieId, {$set: {title, genre, plot, celebrity}}, {new: true})
    .then(() => res.redirect('/movies/list'))
    .catch(err => console.log('Hubo un error:', err))
})

router.get('/:id', (req, res, next) => {
  const movieId = req.params.id
  Movie.findById(movieId)
  .populate('celebrity')
  .then(movie => res.render('movies-details', {movie}))
  .catch(err => console.log('Hubo un error: ', err))
})

module.exports = router