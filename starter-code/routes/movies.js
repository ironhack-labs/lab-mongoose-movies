const express = require('express');
const router  = express.Router();
const Movie = require('../models/movie.js')

/* GET home page */
router.get('/', (req, res, next) => {
  Movie.find()
  .then(movies => {
    res.render('movies', {title: "All our movies", subtitle: "Don't freak out!", movies});
  })
  .catch(err => next(err))
});


router.get('/new', (req, res, next) => {
  res.render('add_movie', {title: "Add a new movie", subtitle:"Must be a blockbuster"});
});

router.post('/new', (req, res, next) => {
  const {title, genre, plot} = req.body;
  const movie = {title, genre, plot};
  Movie.create(movie)
    .then( newMovie => res.redirect(`/movies/${newMovie._id}`))
    .catch(err=> next(err));
});

router.get('/delete/:id', (req, res, next) => {
  const movie_id = req.params.id;
  Movie.findByIdAndRemove(movie_id)
    .then( () => res.redirect("/movies"))
    .catch( err => next(err));
});

router.get('/:id', (req, res, next) => {
  const movie_id = req.params.id;
  Movie.findById(movie_id)
  .then(movie => {
    res.render('movie_details', {title: movie.title, subtitle: movie.genre, movie});
  })
  .catch(err => next(err));
});

module.exports = router;
