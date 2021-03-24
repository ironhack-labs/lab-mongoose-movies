const express = require('express');
const Movie = require('../models/movie');
const router = express.Router();

router.get('/', (req, res) => {
  Movie.find()
    .then((movies) => {
      res.render('movies/index', { movies });
    })
    .catch((error) => {
      console.log('Error displaying list of movies ===> ', error);
    });
});

router.get('/new', (req, res) => {
  res.render('movies/new');
});

router.get('/:id/edit', (req, res) => {
  const { id } = req.params;
  Movie.findById(id)
    .then((movie) => {
      console.log('Movie found!');
      res.render('movies/edit', { movie });
    })
    .catch((error) => {
      res.render('not-found');
      console.log('Error upon deletion ===> ', error);
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  Movie.findById(id)
    .then((movie) => {
      res.render('movies/show', { movie });
    })
    .catch((e) => {
      res.render('not-found');
    });
});

router.post('/', (req, res) => {
  const { movieTitle, movieGenre, moviePlot } = req.body;

  newMovie = {
    title: movieTitle,
    genre: movieGenre,
    plot: moviePlot,
  };

  Movie.create(newMovie)
    .then((x) => {
      res.redirect('/movies');
    })
    .catch((err) => {
      res.render('movies/new');
    });
});

router.post('/:id/delete', (req, res) => {
  const { id } = req.params;
  Movie.findByIdAndDelete(id)
    .then(() => {
      res.redirect('/movies');
    })
    .catch((error) => {
      res.render('not-found');
      console.log('Error upon deletion ===> ', error);
    });
});

router.post('/:id', (req, res) => {
  const { id } = req.params;
  const { movieTitle, movieGenre, moviePlot } = req.body;
  Movie.findByIdAndUpdate(id, {
    title: movieTitle,
    genre: movieGenre,
    plot: moviePlot,
  })
    .then((movie) => {
      res.redirect('/movies');
    })
    .catch((error) => {
      res.render('not-found');
      console.log('Error upon editing ===> ', error);
    });
});

module.exports = router;
