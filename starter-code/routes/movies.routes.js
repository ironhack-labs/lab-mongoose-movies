const express = require('express');
const router = express.Router();

const Movie = require('../models/movie.model')


//Lista de peliculas
router.get('/', (req, res) => {
  Movie.find()
    .then(allMovies => res.render('movies', {
      movies: allMovies
    }))
    .catch(err => console.log("Error consultando la BBDD: ", err))
});

//ver detalles de una película
router.get('/details/:id', (req, res) => {
  Movie.findById(req.params.id)
    .then(aMovie => res.render('movie', {
      movie: aMovie
    }))
    .catch(err => console.log("Error consultando la BBDD: ", err))
});

//Manda el formulario para agregar una pelicula
router.get('/add', (req, res) => res.render('newMovie'))

// Agregar una pelicula
router.post('/add', (req, res) => {

  const {
    title,
    genre,
    plot
  } = req.body

  Movie.create({
      title,
      genre,
      plot
    })
    .then(x => res.redirect('/movies'))
    .catch(err => 'error: ' + err)
})

//mandar el formulario para editar una pelicula
router.get('/edit', (req, res) => {
  const movId = req.query.movId
  Movie.findById(movId)
    .then(theMovie => res.render('editMovie', theMovie))
    .catch(err => console.log('error!!', err))
})

// Editar una película
router.post('/edit', (req, res) => {
  const {
    title,
    genre,
    plot
  } = req.body
  const movId = req.query.movId
  Movie.findByIdAndUpdate(movId, {
       title,
       genre,
       plot
    })
    .then(res.redirect('/movies'))
    .catch(err => console.log('error!!', err))

})

//eliminar una película por su id
router.get('/delete', (req, res) => {
  const movId = req.query.movId
  Movie.findByIdAndRemove(movId)
    .then(res.redirect('/movies'))
    .catch(err => console.log("Error consultando la BBDD: ", err))
});

module.exports = router;