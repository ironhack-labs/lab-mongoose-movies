const express = require('express')
const router = express.Router()

const Movie = require('../models/movie')



// Listado de movies
router.get('/list', (req, res, next) => {
  Movie.find()

    .then(allMovies => res.render('movies-list', { movies: allMovies }))
    .catch(error => console.log(error))
})


//Detalles de pelicula

router.get('/view/: movie_id', (req, res, next) => {
  Movie.findById(req.params.movie_id)
    .then(theMovie => res.render('movies-detail', { movie: theMovie }))
    .catch(error => console.log(error))
})


// Añadir nueva pelicula
router.get('/add', (req, res) => res.render('movies-add'))
router.post('/add', (req, res) => {

  const { title, genre, plot } = req.body
  const newMovie = new Movie({ title, genre, plot })
  newMovie.save()
    .then(theMovie => res.redirect('/movies/list'))
    .catch(error => console.log(error))
})

//delete pelicula

router.post('/delete/:movie_id', (req, res) => {

  Movie.findByIdAndRemove(req.params.movie_id)
    .then(theMovie => {

      res.redirect('/movies/list')
    })
    .catch(error => console.log(error))
})






module.exports = router

