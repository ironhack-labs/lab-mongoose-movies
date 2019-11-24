const express = require('express');

const router = express.Router();

const Movies = require('../models/movies');


router.get('/movies/new', (req, res, next) => {
  res.render('./movies/new');
});

router.post('/movies/new', (req, res, next) => {
  const {
    title,
    genre,
    plot
  } = req.body;
  const newMovie = new Movies({
    title,
    genre,
    plot
  });
  newMovie.save()
    .then(() => {
      res.redirect('/movies');
    })
    .catch(() => {
      res.render('./movies/new');
    });
});


router.post('/movies/:id/delete', (req, res, next) => {
  const movieID = req.params.id;
  Movies.findByIdAndRemove(movieID)
    .then(() => {
      res.redirect('/movies');
    })
    .catch((err) => {
      next(err);
    });
});


router.get('/movies/:id/edit', (req, res, next) => {
  const movieID = req.params.id;
  Movies.findById(movieID)
    .then((movie) => {
      res.render('movies/edit', movie);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/movies/:id', (req, res, next) => {
  const {
    title,
    genre,
    plot
  } = req.body;
  const movieID = req.params.id;
  Movies.findByIdAndUpdate(movieID, {
      title,
      genre,
      plot
    })
    .then(() => {
      res.redirect('/movies');
    })
    .catch((err) => {
      next(err);
    });
});



router.get('/movies', (req, res, next) => {
  Movies.find()
    .then((movie) => {
      res.render('./movies/index', {
        movie
      });
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/movies/:id', (req, res, next) => {
  const movieID = req.params.id;
  Movies.findById(movieID)
    .then((movie) => {
      res.render('./movies/show', movie);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;