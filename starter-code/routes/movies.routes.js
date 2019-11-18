const express = require('express');
const router = express.Router();

const Movie = require('../models/movie.model')



router.get('/', (req, res) => {
  Movie.find()
    .then(allTheMovies => res.render('movies/moviesList', { movies: allTheMovies }))
    .catch(err => console.log("Error consultando la BBDD: ", err))
});

router.get('/details/:id', (req, res) => {
  Movie.findById(req.params.id)
    .then(theMovie => res.render('movies/moviesDetails', { movie: theMovie }))
    .catch(err => console.log("Error consultando la BBDD: ", err))
});


// Renderizar formulario creacion

router.get('/newMovie', (req, res) => res.render('movies/newMovie'));

//Crear nueva
router.post('/newMovie', (req, res) => {

  const { title, genre, plot } = req.body

  if (!title || !genre || !plot) {
    res.render('movies/newMovie', { errorMessage: 'ERROR: Fill all the gaps' })
    return
  }
  Movie.findOne({ "title": title })
    .then(movieTitle => {
      if (movieTitle) {
        res.render("movies/newMovie", { errorMessage: "ERROR: Movie already exists at DataBase" })
        return
      }
      Movie.create({ title, genre, plot })
        .then(() => res.redirect("/movies"))
        .catch(error => console.log(error))
    })
    .catch(error => { console.log(error) })
})


router.get('/edit', (req, res) => {
  const movieId = req.query.movieId
  Movie.findById(movieId)
    .then(theMovie => res.render('movies/editMovie', theMovie))
    .catch(err => console.log('error!!', err))
})

// Editar movie: enviar formulario
router.post('/edit', (req, res) => {
  const { title, genre, plot } = req.body
  const movieId = req.query.movieId

  Movie.findByIdAndUpdate(movieId, { title, genre, plot })
    .then(res.redirect('/movies'))
    .catch(err => console.log('error!!', err))
})


//Borrar movie: renderizar formulario

router.get('/delete', (req, res) => {
  const movieId = req.query.movieId
  Movie.findById(movieId)
    .then(theMovie => res.render('movies/deleteMovie', theMovie))
    .catch(err => console.log('error!!', err))
})


// Borrar movie: enviar formulario
router.post('/delete', (req, res) => {
  const { title, genre, plot } = req.body
  const movieId = req.query.movieId
  Movie.findByIdAndRemove(movieId, { title, genre, plot })
    .then(res.redirect('/movies'))
    .catch(err => console.log('error!!', err))
})









module.exports = router;
