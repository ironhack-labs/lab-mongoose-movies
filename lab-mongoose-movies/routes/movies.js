const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

router.get('/', (req,res,next) => {
  Movie.find({})
    .then(movies => {
      res.render('movies/index', {movies});
    })
    .catch(err => {
      next();
      throw err;
    });
});

router.post('/', (req,res) => {
  Movie.create(req.body)
    .then(() => {
      res.redirect('/movies');
    })
    .catch(err => {
      console.log(err);
      res.render('movies/new', {err});
    });
});

router.get('/:id', (req, res, next) => {
  let movieId = req.params.id;
  Movie.findById(movieId)
    .then(movie => {
      res.render('movies/show', {movie});
    })
    .catch(err => {
      next();
      throw err;
    });
});

router.post('/delete/:id2', (req, res, next) => {
  let movieId = req.params.id2;
  Movie.findByIdAndRemove(movieId)
    .then(()=>{
      res.redirect('/movies');
    })
    .catch(err => {
      next();
      throw err;
    });
});

router.post('/:id', (req, res, next) => {
  var send = req.body;
  Movie.findByIdAndUpdate(req.params.id, send)
    .then(() => {
      res.redirect('/movies');
    })
    .catch(err => {
      next();
      throw err;
    });
});

router.get('/edit/:id3', (req, res, next) => {
  let movieId = req.params.id3;
  Movie.findById(movieId)
    .then(movie => {
      res.render('movies/edit', {movie});
    })
    .catch(err => {
      next();
      throw err;
    });
});

router.get('/new', (req, res, next) => {
  res.render('movies/new');
});

module.exports = router;