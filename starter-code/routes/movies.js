const Movie = require('../models/movie');
const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  Movie.find({}, function(err, movie) {
    console.log({movie});
    res.render('movies/index', {movie})
    console.log("There is an error:", err);
  });
});

router.get('/:id', (req, res) => {
  const movieId = req.params.id;
  Movie.findById(movieId, function(err, movie) {
    res.render('movies/show', {movie})
    console.log("There is an error:", err);
  });
});

// Showing the /show page instead of /new
router.get('/new', (req, res) => {
  res.render('/movies/new/')
})

router.post('/create', (req, res) => {
  const newMovie = new Movie ({
    title : req.body.theTitle,
    genre: req.body.theGenre,
    plot: req.body. thePlot
  })
  newMovie.save()
  .then(movie => {
  })
  .catch(theError => {res.redirect('/movies/new/') })
res.redirect('/movies')
})

router.post('/:id/delete', (req, res) => {
  const movieId = req.params.id;
  const theMovie = Movie.findByIdAndRemove(movieId)
  .then(movie => {
  })
  .catch(error => {
    console.log(error);
  })
  res.redirect('/movies')
})

module.exports = router;