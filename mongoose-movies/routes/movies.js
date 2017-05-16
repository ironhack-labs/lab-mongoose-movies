const express = require('express');
const router = express.Router();
const Movies = require('../models/movies');

//--Render the list of Movies--//
router.get('/', (req, res, next) => {
  Movies.find({}, (error, movies) => {
    if (error) {
      next(error);
    } else {
      res.render('movies/index', {movies});
    }
  });
});

//--Render the new movie ideas--//
router.get('/new', (req, res, next) => {
  res.render('movies/new');
});

//--Render the specifics of each movie--//
router.get('/:id', (req, res, next) => {
  Movies.findById(req.params.id, (error, movie) => {
    if (error) {
      next(error);
    } else {
      res.render('movies/show', {movie});
    }
  });
});

//--Add new movies to the DB--//
router.post('/', (req, res, next) => {
  const movieInfo = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  };
  const newMovie = new Movies(movieInfo);

  newMovie.save((err) => {
    if (err) {
      return next(err);
    }else res.redirect('/movies');
  });
});

//--Remove a movie from the DB--//
router.post('/:id/delete', (req, res, next) => {
  Movies.findByIdAndRemove(req.params.id, (err, movie) => {
    if (err) {
      return next(err);
    } else {
      res.redirect('/movies');
    }
  });
});

//--Get the information from a movie and update it in the DB--//
router.get('/:id/edit', (req, res, next) => {
  Movies.findById(req.params.id, (err, movie) => {
    if (err) {
      next(err);
    } else {
      res.render('movies/edit', {movie});
    }
  });
});

router.post("/:id", (req, res, next) => {
  let edittedMovie = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  };
  Movies.updateOne({"_id": req.params.id}, edittedMovie, (err, movie) => {
    if (err) {
      next(err);
    } else {
      res.redirect('/movies');
    }
  });
});

module.exports = router;
