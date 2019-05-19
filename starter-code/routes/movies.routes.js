const express = require('express')
const router = express.Router()

const Movie = require('../models/movie')



// Listado de movies
router.get('/list', (req, res, next) => {
  Movie.find()

    .then(allMovies => res.render('movies-list', { movies: allMovies }))
    .catch(error => console.log(error))
})







module.exports = router

