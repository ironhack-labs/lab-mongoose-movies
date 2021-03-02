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

module.exports = router;