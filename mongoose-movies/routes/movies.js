var express = require('express');
var router = express.Router();
const Movie = require('../models/movie');

router.get('/', (req, res, next) => {
  Movie.find({}, (err, movies) => {
    if (err) next(err);
     else res.render('movies/index', {movies});
  });
});

router.get('/new', (req, res, next)=> {
  res.render("movies/new");
});

router.post('/', (req, res, next)=> {
  const movieInfo = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  };
  const newCeleb = new Movie(movieInfo);
  newCeleb.save();
  res.redirect("/movies");
});

router.get('/:id', (req, res, next) => {
  Movie.findById(req.params.id, (err, movie)=> {
    if(err) next(err);
    res.render("movies/show", {movie});
  });
});

router.get('/:id/edit', (req, res, next) => {
  Movie.findById(req.params.id, (err, movie)=> {
    if(err) next(err);
    res.render("movies/edit",  {movie});
  });
});

router.post('/:id', (req, res, next) => {
  const movieInfo = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  };
  Movie.findByIdAndUpdate(req.params.id, movieInfo, (err, movie) => {
    if (err) next(err);
    res.redirect('/movies');
  });
});


router.get('/:id/delete', (req, res, next) => {
  Movie.deleteOne({_id: req.params.id}, (err)=> {
    if(err) next(err);
    res.redirect("/movies");
  });
});

module.exports = router;
