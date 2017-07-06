var express = require('express');
var router = express.Router();
const Movie = require('../models/movie')


/*          GET          */

router.get('/', function(req, res, next) {
  Movie.find({}, (err, data) => {
    if (err) { return next(err) }
    res.render('movies/index', { data });
  });
});

router.get('/new', (req, res, next) => {
  res.render('movies/new');
});

router.get('/:id', (req, res, next) => {
  Movie.findById(req.params.id, (err, data) => {
    if (err) { return next(err) }
    res.render('movies/show', { data });
  });
});

router.get('/:id/edit', (req, res, next) => {
  Movie.findById(req.params.id, (err, data) => {
    if (err) { return next(err) }
    res.render('movies/edit', { data });
  });
});

/*          POST          */

router.post('/', (req, res, next) => {
  const moviesInfo = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
}

  const newMovie = new Movie( moviesInfo );

  newMovie.save((err) => {
    if (err) {
      next(err);
    } else {
      res.redirect('movies/new');
    }
  });
});

router.post('/:id', (req, res, next) => {

  const moviesInfo = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  }

  Movie.update({ _id: req.params.id}, moviesInfo, (err) => {

    if (err) {
      next(err);
    } else {
      res.redirect('/movies');
    }
  });
});

router.post('/:id/delete', (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id, (err, data) => {
    if (err) {
      next(err);
    } else {
      res.redirect('/movies');
    }
  });
});

module.exports = router;
