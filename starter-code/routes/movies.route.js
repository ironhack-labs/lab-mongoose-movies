const express = require('express');
const router = express.Router();

const Movies = require('../models/movie.models');

/* GET home page */
router.get('/', (req, res, next) => {
  Movies.find()
    .then(allMovies => res.render('movies/listMovies', {
      movie: allMovies
    }))
    .catch(err => console.log(err))
})

router.get('/details/:id', (req, res) => {

  const movieId = req.params.id

  Movies.findById(movieId)
    .then(movie => res.render('movies/details', movie))
    .catch(err => console.log(err))
})

router.get('/add', (req, res) => res.render('movies/form'))
router.post('/add', (req, res) => {

  const {
    title,
    genre,
    plot
  } = req.body

  Movies.create({
      title,
      genre,
      plot
    })
    .then(() => res.redirect('/movies'))
    .catch(err => console.log(err))
})

router.get('/delete/:id', (req, res, next) => {

  const movieId = req.params.id

  Movies.findByIdAndRemove(movieId)
    .then(() => res.redirect('/movies'))
    .catch(err => console.log(err))
})


router.get('/edit/:id', (req, res) => {

  const movieId = req.params.id

  Movies.findById(movieId)
    .then(theMovie => res.render('movies/edit', theMovie))
    .catch(err => console.log(err))
})

router.post('/edit/:id', (req, res) => {

  const movieId = req.params.id

  Movies.findByIdAndUpdate(movieId, req.body)
    .then(() => res.redirect(`/movies/details/${movieId}`))
    .catch(err => console.log(err))
})


module.exports = router;