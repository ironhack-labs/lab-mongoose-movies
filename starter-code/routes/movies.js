const express = require('express');
const router  = express.Router();

const Movie = require('../models/Movie');


/* GET celebrities page */
router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(movies => {
      //console.log(celebrities);
      res.render("movies", { movies });
    })
    .catch(error => {
      console.log(error)
    })
});

/* ADD new celebrities - GET */
router.get('/movies/new', (req, res, next) => {
  res.render("movies/new");
});

/* ADD new celebrities - POST  */
router.post('/movies/new', (req, res, next) => {
  const { title, genre, plot } = req.body;
  const newMovie = new Movie({ title, genre, plot });
  newMovie.save()
  .then((movie) => {
    res.redirect('/movies');
  })
  .catch((error) => {
    console.log(error);
  })
});

/* POST route to delete celebrity */
router.post('/movies/:id/delete', (req, res, next) => {
  let movieId = req.params.id;
  Movie.findByIdAndRemove({_id: movieId})
    .then(movie => {
      res.redirect('/movies');
    })
    .catch(error => {
      console.log(error)
    })
});

/* GET movies details page */
router.get('/movies/:id', (req, res, next) => {
  let movieId = req.params.id;
  Movie.findOne({_id: movieId})
    .then(movie => {
      res.render("movies/show", { movie })
    })
    .catch(error => {
      console.log(error)
    })
});

module.exports = router;
