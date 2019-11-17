const express = require('express');
const router = express.Router();

const Movie = require('../models/movie.model')



// Lista de movies
router.get('/', (req, res) => {
  Movie.find()
    .then(allMovies => {
      // console.log(allMovies)
      res.render('movies/moviesList', {movies: allMovies})})
    .catch(err => console.log("Error consultando la BBDD: ", err))
});

// detalles de movies

router.get('/details/:id', (req, res) => {
  const movieId = req.params.id
  Movie.findById(movieId)
    .then(theMovie => res.render('movies/moviesDetails', {movie: theMovie}))
    .catch(err => console.log("Error consultando la BBDD: ", err))
});

// Nueva movie: renderizar formulario
router.get('/add', (req, res) => res.render('movies/newMovie'))

// Nueva movie: enviar formulario
router.post('/add', (req, res) => {

  const { title, genre, plot } = req.body

  Movie.create({ title, genre, plot })
    .then(x => res.redirect('/movies'))
    .catch(err => 'error: ' + err)
})

// Editar movie: renderizar formulario
router.get('/edit', (req, res) => {
  const movieId = req.query.movieId
  Movie.findById(movieId)
    .then(theMovie => res.render('movies/editMovie', theMovie))
    .catch(err => console.log('error al encontrar la celebrity', err))
})


// Editar movie: enviar formulario
router.post('/edit', (req, res) => {
  const { title, genre, plot } = req.body
  const movieId = req.query.movieId

  Movie.findByIdAndUpdate(movieId, { title, genre, plot })
    .then(res.redirect('/movies'))
    .catch(err => console.log('error al actualizar', err))

})

//eliminar movie
router.get ('/delete', (req,res)=> {
  const movieId = req.query.movieId
  Movie.findByIdAndRemove(movieId)
  .then(res.redirect('/movies'))
  .catch(err => console.log('error consiltando la BBDD ', err)) 
  
})

module.exports = router