const express = require('express');
const router  = express.Router();
const Movie = require("../models/Movie")



/* GET the new page */
router.get('/new', (req, res, next) => {
  res.render('movies/new');

});

/* POST movies page */
router.post('/', (req, res, next) => {
  const {title, genre, plot} = req.body;
  const movie = new Movie({title, genre, plot});
  movie.save().
  then(movie => {
    res.redirect('/movies');
  })
  .catch(err => {
    res.render('movies/new')
  })
});
/* POST delete page */
router.post('/:id/delete', (req, res, next) => {
  let movie = req.params.id;
  Movie.findByIdAndRemove(movie)
  .then(() => {
    res.redirect('/movies');
  })
  .catch(error => {
    next();
  })
});



/* GET movies page */
router.get('/', (req, res, next) => {
  Movie.find().then(movies => {
    res.render('movies/index', {movies});
  })
});
/* GET edit specific page */
router.get('/:id/edit', (req, res, next) => {
  let movie = req.params.id;
  Movie.findById(movie).then(movie => {
    res.render('movies/edit', {movie});
  })
  .catch(err => {
    next();
    return err;
  })
});

/* POST edit movies page */
router.post('/:id', (req, res, next) => {
  let movie = req.params.id;
  const {name, occupation, catchPhrase} = req.body;
  const editMovie = {name, occupation, catchPhrase};
  Movie.findByIdAndUpdate(movie, editMovie)
    .then(() => {
      res.redirect('/movies');
    })
    .catch(err => {
      next();
      return err;
    })
});
/* GET movie specific page */
router.get('/:id', (req, res, next) => {
  let movie = req.params.id;
  Movie.findById(movie).then(movie => {
    res.render('movies/show', {movie});
  })
});


module.exports = router;
