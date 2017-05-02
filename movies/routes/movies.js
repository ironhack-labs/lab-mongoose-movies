const express = require('express');

const moviesModel = require('../models/movies.js');

const moviesRoutes = express.Router();

moviesRoutes.get('/movies', (req, res, next) => {
  moviesModel.find((err, moviesList) => {
    if (err) {
      next(err);
      return;
    }
    res.render('movies/index.ejs', {
      moviesRoutes: moviesList
    });
  });
});


moviesRoutes.get('/movies/new', (req, res, next) => {
  res.render('movies/new');
});

moviesRoutes.post('/movies/new', (req, res, next) => {
const thatMovie = new moviesModel ({
    name: req.body.movieName,
    genr: req.body.movieOcupation,
    plot: req.body.moviecatchPhrase,
    profileImage: req.body.movieImageUrl
  });

  thatMovie.save((err) => {
    if (err) {
      res.render('movies/new', {
        validationErrors: thatMovie.errors
      });
      return;
    }
    res.redirect('/movies');
  });
});

moviesRoutes.get('/movies/:id/', (req, res, next) => {
  const myCelebrityId = req.params.id;

moviesModel.findById( myCelebrityId, (err, thatMovie) => {
  if (err) {
    next(err);
    return;
  }
    res.render('movies/show', {
    movie: thatMovie
    });
  });
});

//UPDATE

moviesRoutes.get('/movies/:id/edit', (req, res, next) => {
    //                         |
  const movieId = req.params.id;

  moviesModel.findById(movieId, (err, thatMovie) => {
    if (err) {
      next(err);
      return;
    }

    res.render('movies/edit', {
      movie: thatMovie
    });
  });
});

moviesRoutes.post('/movies/:id', (req, res, next) => {
    //                          |
  const movieId = req.params.id;

    // gather the form values into an object
  const movieChanges = {
    name: req.body.movieName,
    grnre: req.body.movieOcupation,
    plot: req.body.moviecatchPhrase,
    profileImage: req.body.movieImageUrl
  };

  moviesModel.findByIdAndUpdate(
      // 1st arg -> which document (id of the document)
    movieId,
      // 2nd arg -> which changes to save (from the form)
    movieChanges,
      // 3rd arg -> CALLBACK!
    (err, thatMovie) => {
      if (err) {
        res.render('movies/edit', {
          movie: thatMovie,
          validationErrors: thatMovie.errors
        });
        return;
      }

      // this is how you would redirect to product details page
      // res.redirect(`/products/${movieId}`);

      res.redirect('/movies');
    }
  );
});

// DESTROY

moviesRoutes.post('/movies/:id/delete', (req,res, next) => {
  const movieId= req.params.id;

  moviesModel.findByIdAndRemove(movieId, (err, thatMovie) => {
    if (err) {
      next(err);
      return;
    }
    res.redirect('/movies');
  }
  );
});

module.exports = moviesRoutes;
