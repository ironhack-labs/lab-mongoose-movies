const express = require('express');
const router = express.Router();

const Movie = require('../models/movie.js')

router.get('/', (req, res, next) => {
  Movie.find()
    .then(allMovies => {
      console.log(allMovies)
      res.render('movies/index', {
        movies: allMovies
      })
    })
    .catch(err => console.log(`No se imprimen las películas: ${err}`))
})

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