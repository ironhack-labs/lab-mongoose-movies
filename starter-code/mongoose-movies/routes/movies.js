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

router.get('/movies/new', (req,res,next) => {

    res.render('movies/new.ejs');

});

router.post('/movies', (req,res,next) => {

  // create new celebrity with the celebrity schema
  const movie = new MovieModel({
      title: req.body.movieTitle,
      genre: req.body.movieGenre,
      plot: req.body.moviePlot
  });

  movie.save((err) => {

        if (err) {

            next(err);

            return;

        }

        // STEP #3 redirect
        // ALWAYS redirect after a successful to POST to avoid resubmitting
        res.redirect('/movies');
          // You can only redirect to a URL
    });

});


router.get('/movies/:id', (req,res,next) => {

    const id = req.params.id;

    MovieModel.findById(id, (err, info) => {

        if (err) {
          console.log("Error!");
          next(err);

        }
        console.log(info);

        res.locals.movieInfo = info;

        res.render('movies/show.ejs');

    });

});


module.exports = router;
