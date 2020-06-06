const express = require('express');
const router = express.Router();

const Movie = require('../models/movie.js')

router.get('/', (req, res, next) => {
  Movie.find()
    .then(allMovies => {
      //console.log(allMovies)
      res.render('movies/index', {
        movies: allMovies
      })
    })
    .catch(err => console.log(`No se imprimen las películas: ${err}`))
})

//Render New movie
router.get('/new', (req, res, next) => {
  res.render('movies/new')

});

// Post new Celebritie

router.post('/new', (req, res, next) => {
  const {
    title,
    genre,
    plot
  } = req.body;

  const newMovie = new Movie({
    title,
    genre,
    plot
  })
  newMovie.save()
    .then(() => res.redirect('/movies'))
    .catch(err => {
      console.log(`Error al agregar la película: ${err}`)
      res.redirect('movies/new')
    })
});

// Render de detalles de la movie

router.get('/:id', (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movieDetails => {
      res.render('movies/show', {
        movie: movieDetails
      })
    })
    .catch(error => {
      console.log('Error al acceder a los detalles de la movie', error);
    })
});







module.exports = router;


// router.get('/', (req, res, next) => {
//   Celebrity.find()
//     .then(allCelebrities => {
//       res.render('celebrities/index', {
//         celebrities: allCelebrities
//       })
//     })
//     .catch(error => {
//       console.log('Error al mostrar la base de Datos: ', error);
//     })
// })