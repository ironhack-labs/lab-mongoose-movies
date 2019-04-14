const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movie.controller');

router.get('/', (req, res, next) => {
  movieController.getMovies()
    .then(movies => res.render('movies/index', {movies}))
    .catch(err => console.error(err));
});
router.get('/:id', (req, res, next) => {
  movieController.getMovieById(req.params.id)
    .then(movie => res.render('movies/show', {movie}))
    .catch(err => console.error(err));
});

module.exports = router;