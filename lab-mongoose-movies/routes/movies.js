let express = require('express');

const router = express.Router();

const MovieModel = require('../models/movies.js');

router.get('/movies', (req, res, next) => {

  MovieModel.find((err, movieDocs) => {
    if(err) {
      next(err);
      return;
    }
    res.render('movies/index.ejs',{
      movies: movieDocs
    });
  });
});

router.get('/movies/:id', (req, res, next) => {
  const movieId = req.params.id;

  MovieModel.findById(movieId, (err, movie) => {
    if(err) {
      next(err);
      return;
    }
    res.render('movies/show', {
      movie: movie
    });
  });
});

module.exports = router;
