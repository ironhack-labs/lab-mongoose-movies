const express = require('express')
const router = express.Router()
const Movie = require("./../models/movie.model")

// Listado movies
router.get('/', (req, res) => {
  //res.render('movies')
  Movie
    .find()
    .then(allMovies => res.render("movies/movies-pages",{allMovies}))
  .catch(err=>console.log(err))
})

// Details
router.get('/details/:movies_id', (req, res) => {
  //res.send('dime los id + req.params.movies_id')
const MovieId = req.params.movies_id

  Movie
    .findById(MovieId)
    .then(oneMovie => res.render("movies/details", oneMovie))
  .catch(err=>console.log(err))
})

// Formulario nuevo movie: renderizar (GET)
router.get('/crear-movie', (req, res) => {

  //res.send("hkwfjbf")

    res.render("movies/movies-create")
  
})
// Formulario nuevo movie: gestionar (POST)
router.post('/crear-movie', (req, res) => {

    const { title, genre, plot} = req.body

    Celebrity
        .create({ title, genre, plot })
        .then(() => res.redirect('/movies'))
        .catch(err => console.log('Error:', err))
})

// Eliminar movie
router.post('/:_id/delete', (req, res) => {

  const MovieId = req.params._id

    Movie
        .findByIdAndDelete(MovieId)
        .then(() => res.redirect('/movies'))
        .catch(err => console.log(err))
})

// Formulario edición movie: gestionar (GET)
router.get('/:_id/edit', (req, res) => {

    const MovieId = req.params._id                            

    Movie
        .findById(MovieId)
        .then(movieInfo => res.render('movies/movies-edit', movieInfo))
        .catch(err => console.log(err))
})

router.post('/:_id/edit', (req, res) => {

  const MovieId = req.query._id

  const { title, genre, plot  } = req.body

    Movie
        .update(MovieId,{ title, genre, plot  })
        .then(() => res.redirect('/movies'))
        .catch(err => console.log(err))
})

module.exports = router

