const express = require('express');
const router = express.Router();

const Movie = require('../models/movie.model')


//---MOVIE PAGE---//
router.get('/', (req, res) => {
  Movie.find()
    .then(allTheMovies => {
      console.log('celebs from db:', allTheMovies)
      res.render('movieList', {
        movies: allTheMovies
      })
    })
    .catch(err => console.log('Error consultando la base de datos: ', err))
})

//---MOVIE DETAILS---//
router.get('/details/:id', (req, res) => {
  Movie.findById(req.params.id)
    .then(theMovie =>
      res.render('movieDetails', {
        movie: theMovie
      }))
    .catch(err => console.log('Error consultando la base de datos: ', err))
})

//---NEW MOVIE FORM RENDER---//
router.get('/add', (req, res) => res.render('newMovieForm'))

//--NEW MOVIE SEND FORM---//
router.post('/add', (req, res) => {
  const {
    title,
    gnre,
    plot
  } = req.body
  Movie.create({
      title,
      gnre,
      plot
    })
    .then(x => res.redirect('/movies'))
    .catch(err => 'Error: ' + err)
})

//---EDIT MOVIE FORM RENDER---//
router.get('/edit', (req, res) => {
  const movieId = req.query.movieId
  Movie.findById(movieId)
    .then(editMovie => res.render('editMovieForm', editMovie))
    .catch(err => console.log('Error: ', err))
})

//---EDIT MOVIE SEND FORM---//
router.post('/edit', (req, res) => {
  const {
    title,
    gnre,
    plot
  } = req.body
  const movieId = req.query.movieId
  Movie.findByIdAndUpdate(movieId, {
      title,
      gnre,
      plot
    })
    .then(res.redirect('/movies'))
    .catch(err => console.log('Error: ', err))
})

//---DELETE MOVIE---/
router.get('/delete', (req, res) => {
  const movieId = req.query.movieId
  Movie.findByIdAndRemove(movieId)
    .then(res.redirect('/movies'))
    .catch(err => console.log('Error consultando la base de datos: ', err))
})


module.exports = router;