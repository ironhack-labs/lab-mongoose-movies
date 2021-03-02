const express = require("express");
const router = express.Router();
const MovieModel = require("../models/Movie");



router.get('/', (req, res, next) => {
  MovieModel.find()
  .then((movies) => res.render('../views/movies/index.hbs', {movies}))
  .catch((err) => next(err))
});

module.exports = router;