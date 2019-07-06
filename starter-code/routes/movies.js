const express = require('express');
const router  = express.Router();

const Movie = require('../models/movie');

/* GET home page */
router.get('/', (req, res, next) => {
  Movie.find()
  .then(movies => {
    res.render('movies/index', { movies });
  })
  .catch(err => console.log(err));
});

router.get('/new', (req, res, next) => {
  res.render('movies/new');
});

router.get('/:movieId', (req, res, next) => {
  const { movieId } = req.params;
  Movie.findById(movieId)
  .then(movie => {
    res.render('movies/show', movie);
  })
  .catch(err => console.log(err));
});

router.post('/', (req, res, next) => {
  const { title, genre, plot } = req.body;
  const movie = new Movie({ title, genre, plot });
  movie.save()
  .then(() => {
    res.redirect('/movies');
  })
  .catch((error) => {
    console.log(error);
  })
});

router.get('/:movieId/edit', (req, res, next) => {
  const { movieId } = req.params;
  Movie.findById(movieId)
  .then(movie => {
    res.render('movies/edit', movie);
  })
  .catch((error) => {
    console.log(error);
  })
});

router.post('/:movieId', (req, res, next) => {
  const { movieId } = req.params;
  const { title, genre, plot } = req.body;
  Movie.update({_id: movieId}, { $set: {title, genre, plot}})
  .then(() => {
    res.redirect('/movies');
  })
  .catch(err => console.log(err));
});

router.post('/:movieId/delete', (req, res, next) => {
  const { movieId } = req.params;
  Movie.findByIdAndRemove(movieId)
  .then(() => {
    res.redirect('/movies');
  })  
  .catch((error) => {
    console.log(error);
  })  
});  

module.exports = router;
