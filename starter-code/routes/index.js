const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res, next) => {
  Celebrity.find().then(celebrities => {
    console.log(celebrities);
    res.render('celebrities', { celebrities });
  });
});

router.get('/celebrities/show', (req, res, next) => {
  Celebrity.findOne({ _id: req.query.celebrity_id })
    .then(celebrity => {
      res.render('celebrities/show', { celebrity });
    })
    .catch(error => console.log(error));
});

router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.post('/celebrities/new', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const newCeleb = new Celebrity({ name, occupation, catchPhrase });
  newCeleb
    .save()
    .then(res.redirect('/celebrities'))
    .catch(error => console.log(error));
});

router.get('/celebrities/delete', (req, res, next) => {
  // Celebrity.findByIdAndDelete({ _id: req.query.celebrity_id }).then(deletedCeleb => res.redirect('/celebrities'));
  Celebrity.findByIdAndDelete(req.query.celebrity_id)
    .then(deletedCeleb => res.redirect('/celebrities'))
    .catch(error => console.log(error));
});

router.get('/celebrities/edit', (req, res, next) => {
  Celebrity.findOne({ _id: req.query.celebrity_id })
    .then(celebrity => res.render('celebrities/edit', { celebrity }))
    .catch(error => console.log(error));
});

router.post('/celebrities/edit', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.findByIdAndUpdate(req.query.celebrity_id, req.body).then(updatedCeleb => {
    res.redirect('/celebrities');
  });
});

router.get('/movies', (req, res, next) => {
  Movie.find().then(movies => {
    console.log(movies);
    res.render('movies', { movies });
  });
});

router.get('/movies/show', (req, res, next) => {
  Movie.findOne({ _id: req.query.movie_id })
    .then(movie => res.render('movies/show', { movie }))
    .catch(error => console.log(error));
});

router.get('/movies/new', (req, res, next) => {
  res.render('movies/new');
});

router.post('/movies/new', (req, res, next) => {
  const { title, genre, plot } = req.body;
  const newMovie = new Movie({ title, genre, plot });
  newMovie
    .save()
    .then(res.redirect('/movies'))
    .catch(error => console.log(error));
});

router.get('/movies/delete', (req, res, next) => {
  Movie.findByIdAndDelete(req.query.movie_id)
    .then(deletedMovie => res.redirect('/movies'))
    .catch(error => console.log(error));
});

router.get('/movies/edit', (req, res, next) => {
  Movie.findOne({ _id: req.query.movie_id })
    .then(movie => res.render('movies/edit', { movie }))
    .catch(error => console.log(error));
});

router.post('/movies/edit', (req, res, next) => {
  const { title, genre, plot } = req.body;
  Movie.findByIdAndUpdate(req.query.movie_id, req.body).then(updatedMovie => {
    res.redirect('/movies');
  });
});

module.exports = router;
