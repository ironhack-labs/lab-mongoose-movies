var express = require('express');
var router = express.Router();
var Movie = require('../models/movie');

router.get('/', function(req, res, next) {
  Movie.find({}, (err, cl) => {
    if (err) {
      next();
      return;
    } else {
      let args = {
        title: "Movies",
        movies: cl
      }
      res.render('movies/index', args);
    }
  });
});

router.get('/:id', function(req, res, next) {
  Movie.findById(req.params.id, (err, p) => {
    if (err) {
      next();
      return;
    }
    let args = {
      movie: p
    }
    res.render('movies/show', args);
  })
});

router.get('/new', function(req, res, next) {
  let args = {
    title: "New movie"
  }
  res.render('movies/new', args);
});

router.post('/', function(req, res, next) {
  let {
    title,
    genre,
    plot
  } = req.body;
  let args = {
    title,
    genre,
    plot
  };

  var movie = new Movie(args);
  movie.save((err, obj) => {
    if (err) {
      console.log(err);
      res.redirect('/movies/new');
    } else {
      console.log('Saved', obj);
      res.redirect('/movies');
    }
  })
});

router.get('/:id/delete', function(req, res, next) {
  let id = req.params.id;
  Movie.findByIdAndRemove(id, (err, p) => {
    if (err) {
      console.log(err);
      next()
      return err;
    }
    res.redirect('/movies');
  })
});

router.get('/:id/edit', function(req, res, next) {
  let id = req.params.id;
  Movie.findById(req.params.id, (err, p) => {
    if (err) {
      next();
      return;
    }
    let args = {
      movie: p
    }
    res.render('movies/edit', args);
  })
});

router.post('/:id', function(req, res, next) {
  let id = req.params.id;
  let {
    title,
    genre,
    plot
  } = req.body;
  Movie.findById(id, (err, p) => {
    if (err) {
      next();
      return;
    }
    p.title = title;
    p.genre = genre;
    p.plot = plot;
    p.save((err, obj) => {
      if (err) {
        next();
        return;
      };
      res.redirect('/movies/' + id);
    });
  });
});

module.exports = router;
