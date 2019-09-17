const express = require('express');
const router = express.Router();

const Movie = require('../models/movie');

router.get('/', (req, res, next) => {
  Movie.find()
    .then((whatever) => {
      console.log(whatever)
      res.render('movies/index', { moviesList: whatever })
    })
    .catch((error) => {
    })
});

router.get('/new', (req, res, next) => {
  Movie.findOne({ '_id': req.query.id })
    .then((add) => {
      res.render('movies/new', { add });
    })
    .catch(error => {
      console.log('Error while retrieving details: ', error);
    })
});

router.get('/:id', (req, res, next) => {
  Movie.findOne({ '_id': req.params.id })
    .then(details => {
      res.render('movies/show', { movieDetails: details });
    })
    .catch(error => {
      console.log('Error while retrieving details: ', error);
    })
});


router.post('/new', (req, res, next) => {

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

router.get('/:id/delete', (req, res, next) => {

  Movie.findOneAndDelete({ _id: req.params.id })
    .then((movie) => {
      console.log(movie)
      res.redirect("/movies")
    })
    .catch((error) => {
      console.log("something is wrong", error);
    })
});

router.get('/:movie_id/edit', (req, res, next) => {
  Movie.findById(req.params.movie_id).then((result) => {

    res.render('movies/edit', result);
  })
});

router.post('/:movie_id', (req, res, next) => {
  const { title, genre, plot } = req.body;
  Movie.update(
    { _id: req.params.movie_id },
    { title, genre, plot }).then(() => {
      res.redirect('/movies')
    })
});

module.exports = router;