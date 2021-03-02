const express = require("express");
const router = express.Router();
const MovieModel = require("../models/Movie");



router.get('/', (req, res, next) => {
  MovieModel.find()
  .then((movies) => res.render('../views/movies/index.hbs', {movies}))
  .catch((err) => next(err))
});

router.get('/:id([a-z0-9]{24})/show', (req, res, next) => {
  MovieModel.findById(req.params.id)
  .then((movie) => res.render("../views/movies/show.hbs", {movie}));
});

router.get('/addnew', (req, res, next) => {
  res.render("../views/movies/new.hbs")
})

router.post('/new', (req, res, next) => {
  const { title, genre, plot } = req.body;
  MovieModel.create({ title, genre, plot })
  .then((movie) => {
    console.log(movie);
    res.redirect('/movies')
  })
  .catch((err) => next(err));
})

router.post('/:id([a-z0-9]{24})/delete', (req, res, next) => {
  MovieModel.findByIdAndDelete(req.params.id)
  .then(() => res.redirect('/movies'))
  .catch((err) => next(err));
})

module.exports = router;