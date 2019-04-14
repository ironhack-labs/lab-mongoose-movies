const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movie.controller');

router.get('/', (req, res, next) => {
  movieController.getMovies()
    .then(movies => res.render('movies/index', {movies}))
    .catch(err => console.error(err));
});
router.get('/new', (req, res, next) => {
    res.render('movies/new');
});
router.get('/:id', (req, res, next) => {
  movieController.getMovieById(req.params.id)
    .then(movie => res.render('movies/show', {movie}))
    .catch(err => console.error(err));
});

router.post('/new', (req, res, next) => {
  // Si no aparece en el modelo, no se pueden añadir nuevos datos incluso si se pasan por POST. No es necesario hacer un filtro
  movieController.createMovie({...req.body})
    .then(() => res.redirect('/movies'))
    .catch(err => console.error(err));
});

router.post('/:id/delete', (req, res, next) => {
  movieController.deleteById(req.params.id)
    .then(() => res.redirect('/movies'))
    .catch(err => console.error(err));
});

module.exports = router;