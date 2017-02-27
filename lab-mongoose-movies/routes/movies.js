let express = require('express');

const router = express.Router();

const MovieModel = require('../models/movies.js');

router.get('/movies', (req, res, next) => {

  MovieModel.find((err, movieDocs) => {
    if(err) {
      next(err);
      return;
    }
    res.render('movies/index.ejs',{
      movies: movieDocs
    });
  });
});

router.get('/movies/new', (req, res, next) => {
  res.render('movies/new');
});

router.post('/movies', (req, res, next) => {
  const movieInfo = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  };

  const newMovie = new MovieModel(movieInfo);

  newMovie.save((err) => {
    if (err) {
      res.render('movies/new');
    }

    res.redirect('/movies');
  });
});

router.post('/movies/:id/delete', (req, res, next) => {
  const movieId = req.params.id;

  MovieModel.findByIdAndRemove(movieId, (err) => {
    if(err) {
      next(err);
      return;
    }
    res.redirect('/movies');
  });
});

router.get('/movies/:id', (req, res, next) => {
  const movieId = req.params.id;

  MovieModel.findById(movieId, (err, movie) => {
    if(err) {
      next(err);
      return;
    }
    res.render('movies/show', {
      movie: movie
    });
  });
});

module.exports = router;
