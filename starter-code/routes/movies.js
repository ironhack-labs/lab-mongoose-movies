const express = require('express');
const router  = express.Router();


const Movie = require('../models/Movie.model.js')

/* GET movies page */
router.get('/movies', (req, res, next) => {
  Movie.find()
  .then((moviesFromDb)=> res.render('movies/index', {moviesFromDb}))
  .catch((e)=> console.log(e))
  
})

/* POST movies page */
router.post('/movies', (req, res, next) => {
  const {title, genre, plot} = req.body
  Movie.create({title, genre, plot})
  .then(()=> console.log('New created'))
  .then(() => res.redirect('/movies'))
  
  .catch((e)=> console.log(e))
  
})

/* GET New movies page */
router.get('/movies/new', (req, res, next) => {
  res.render('movies/new')
 
})

/* GET movies page */
router.get('/movies/:id', (req, res, next) => {
  Movie.findById(req.params.id)
  .then((movieFromDb)=> res.render('movies/show', {movieFromDb}))
  .catch((e)=> console.log(e))
})

/* POST Delete movies */
router.post('/movies/:id/delete', (req, res, next) => {
  
  Movie.findByIdAndRemove(req.params.id)
  .then(()=> console.log('Movie deeted'))
  .then(() => res.redirect('/movies'))
  
  .catch((e)=> console.log(e))
  
})

/* GET Edit movies page */
router.get('/movies/:id/edit', (req, res, next) => {
  Movie.findById(req.params.id)
  .then((movieFromDb)=> res.render('movies/edit', {movieFromDb}))
  .catch((e)=> console.log(e))
})


/* POST movies page */
router.post('/movies/:id', (req, res, next) => {
  Movie.findByIdAndUpdate(req.params.id, req.body)
  .then(() => res.redirect('/movies'))
  
  .catch((e)=> console.log(e))
})



module.exports = router;
