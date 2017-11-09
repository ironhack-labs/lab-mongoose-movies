var express = require('express');
var router = express.Router();

const Celebrity = require('../models/movies')

router.get('/', function (req, res, next) {
  Celebrity.find({}, function (err, celebrities) {
    if (err) return next(err)
    res.render('movies/index', {
      movies
    });
  });
});

router.get('/new', function (req, res, next) {
  res.render('movies/new', {
  });
});

router.post('/new', function (req, res, next) {
  const body = req.body
  const movie = new Movie(body)
  movie.save(function (err, doc) {
    if (err) return next(err)
    res.redirect('/movies')
  });
});

router.get('/edit/:id', function (req, res, next) {
  const id = req.params.id
  Movie.findOne({_id: id}, function (err, movie) {
    if (err) return next(err)
    res.render('movies/edit', {
      movie
    });
  });
});

router.get('/info/:id', function (req, res, next) {
  const id = req.params.id
  Movie.findOne({_id: id}, function (err, movie) {
    if (err) return next(err)
    res.render('movies/info', {
      movie
    });
  });
});

router.post('/edit/:id', function (req, res, next) {
  const id = req.params.id
  const body = req.body
  const {tittle, genre, plot} = body

  const criteria = {_id: id}
  const update = {$set: {tittle, genre, plot}}

  Movie.updateOne(criteria, update, function (err, movie) {
    if (err) return next(err)
    res.redirect('/movies')
  });
});

router.get('/delete/:id', function (req, res, next) {
  const id = req.params.id
  const criteria = {_id: id}
  Movie.remove(criteria, function (err) {
    if (err) return next(err)
    res.redirect('/movies')
  });
});



module.exports = router;
