const express = require('express');
const Movie = require('../models/Movie');
const router = express.Router();

router.get('/', (req, res, next) => {
  Movie.find((err, movies) => {
    if(err){
      next();
      return err;
    } else {
      res.render('movies/index', {movies: movies});
    }
  });
});

router.get('/:id', function(req, res, next) {
  Movie.findById(req.params.id, (err, movie) => {
    if(err){
      next();
      return err;
    }
    res.render('movies/show', {movie: movie});
  });
});

router.get('/new', (req, res, next) => {
    res.render('movies/new');
});

router.post('/', (req, res, next) => {
    let movieNew = new Movie({
      title: req.body.title,
      genre: req.body.genre,
      plot: req.body.plot
    });

    movieNew.save( (err, obj) => {
      if (err) {
        res.render('movies/new');
      } else {
        res.redirect('/movies');
      }
    });
});

router.get('/:id/delete', function(req, res, next) {
  let id = req.params.id;
  Movie.findByIdAndRemove(id, (err, obj) => {
    if (err){ return next(err); }
    res.redirect("/movies");
  });
});

router.get('/:id/edit', function(req, res, next) {
  Movie.findById(req.params.id, (err, movie) => {
    if(err){
      next();
      return err;
    }
    res.render('movies/edit', {movie: movie});
  });
});

router.post('/:id', function(req, res, next) {
  let {title, genre, plot} = req.body;
  let edits = {
    title,
    genre,
    plot
  };
  Movie.findByIdAndUpdate(req.params.id, edits, (err, movie) => {
    if(err){
      next();
      return err;
    }
    res.redirect(`/movies/${movie._id}`);
  });
});

module.exports = router;
