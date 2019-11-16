const express = require('express');
const router = express.Router();
const Movie = require('../models/movie.model')

router.get('/', (req, res, next) => {
  Movie.find()
    .then(allTheMovies => res.render('movies/index', { movies: allTheMovies }))
    .catch(err => {
      console.log('error en consultado BBDD: ', err)
      res.render('index')
    })
})

router.get('/:id', (req, res, next) => {
  Movie.findById(req.params.id)
    .then(theMovie => res.render('movies/show', { movie: theMovie }))
    .catch(err => console.log("error leyendo BBDD ", err))
})
router.get('/manage/new', (req, res, next) => res.render('movies/new'))
router.post('/manage/new', (req, res, next) => {
  const { title, genre, plot } = req.body
  Movie.create({ title, genre, plot })
    .then(x => res.redirect('/movies'))
    .catch(err => console.log("error al crear pelicula", err))
})
router.get('/:id/delete', (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id)
    .then(x => res.redirect('/movies'))
    .catch(err => console.log('error de mierda', err))
})

module.exports = router;