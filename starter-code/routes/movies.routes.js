const express = require('express');
const router = express.Router();

const Movies = require('../models/movies.model')

router.get('/add', (req, res) => res.render('movies-add'))

router.post('/add', (req, res) => {

  const {
    title,
    genre,
    plot,
  } = req.body

  Movies.create({
      title,
      genre,
      plot,
    })
    .then(x => res.redirect('/movies/add'))
    .catch(err => 'error with creating movie', err)

})

router.get('/', (req, res) => {
  Movies.find()
    .then(allMovies => res.render('movies', {
      movie: allMovies
    }))
    .catch(err => console.log("Error finding all movies ", err))
});

router.get('/:id', (req, res) => {
  Movies.findById(req.params.id)
    .then(oneMovie => res.render('movie-show', {
      oneMovie: oneMovie
    }))
    .catch(err => console.log("Error finding one movie ", err))
});


router.get('/delete/:id', (req, res) => {
  Movies.findByIdAndDelete(req.params.id)
    .then(oneMovie => res.render('movies-delete', {
      deleteMovie: oneMovie
    }))
    .catch(err => console.log("Error deleting movie ", err))
});

module.exports = router;