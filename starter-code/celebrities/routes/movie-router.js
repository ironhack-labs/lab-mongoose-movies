const express = require('express');

const MovieModel = require('../models/movie-model.js');

const router = express.Router();


router.get('/movies', (req, res, next) => {

  MovieModel.find((err, allMovies) => {
    if (err) {
      next(err);
      return;
    }

    res.locals.listOfMovies = allMovies;

    res.render('movies/index.ejs');
  });
});

router.get('/movies', (req, res, next) => {

  MovieModel.find((err, allmovies) => {
    if (err) {
      next(err);
      return;
    }

    res.locals.listOfMovies = allmovies;

    res.render('movies/index.ejs');
  });
});

router.get('/movies/new', (req, res, next) => {
  res.render('movies/new.ejs');
});

router.post('/movies', (req, res, next) => {

    const movie = new MovieModel({
        title: req.body.movieName,
        genre: req.body.genre,
        plot: req.body.plot,
    });

    movie.save((err) => {
      if(err) {

        next(err);
        return;

      }

      res.redirect('/movies');

    });
});

router.get('/movies/:movieId', (req, res, next) => {
  MovieModel.findById (
    req.params.movieId,

    (err, movieFromDb) => {
      if(err) {
        next(err);
        return;
      }
      res.locals.movieInfo = movieFromDb;

      res.render('movies/movie-details.ejs');
    }
  );
});

router.post('/movies/:movieId/delete', (req, res, next) => {
  MovieModel.findByIdAndRemove(
    req.params.movieId,

    (err, movieInfo) => {
      if(err) {
        next(err);
        return;
      }
      res.redirect('/movies');
    }
  );
});

router.get('/movies/:movieId/edit', (req, res, next) => {
  MovieModel.findById(
    req.params.movieId,

    (err, movieFromDb) => {
      if (err) {
        next(err);
        return;
      }

      res.locals.movieInfo = movieFromDb;

      res.render('movies/edit-movie.ejs');
    }
  );
});

router.post('/movies/:movieId', (req, res, next) => {
  MovieModel.findById(
    req.params.movieId,
    (err, movieFromDb) => {
      if(err) {
        next(err);
        return;
      }
      movieFromDb.title = req.body.movieName;
      movieFromDb.genre = req.body.genre;
      movieFromDb.plot = req.body.plot;

      movieFromDb.save((err) => {
        if(err) {
          next(err);
          return;
        }
        res.redirect('/movies');
      });
    }
  );
});

module.exports = router;
