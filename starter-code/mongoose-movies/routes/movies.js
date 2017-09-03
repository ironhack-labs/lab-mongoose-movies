const express = require('express');

const MovieModel = require('../models/movies.js');

const router = express.Router();


router.get('/movies', (req,res,next) => {

  MovieModel.find((err,movies) => {
      if (err) {
        next(err);
        return;
      }
      console.log(movies);
      res.locals.listOfMovies = movies;

      res.render('movies/index.ejs');
  });

});


module.exports = router;
