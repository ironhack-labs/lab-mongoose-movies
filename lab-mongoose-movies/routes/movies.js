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

module.exports = router;
