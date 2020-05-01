const express = require('express');
const router  = express.Router();

const Movie = require('../models/movie.js');



router.get('/movies', (req, res, next) => {
    Movie.find() 
      .then(allmovies => {
        res.render('movies/movies', {movies: allmovies});  
      })
      .catch((error) => {
        next(error);
      });
  });

router.get('/movies/new', (req, res) => res.render('movies/new-movie')); 

router.post('/movies/create', (req, res, next) => {

  const {title, genre, plot, cast} = req.body;

  const newMovie = new Movie({title, genre, plot, cast});
  
  newMovie.save()
  .then(()=> {
    res.redirect('/movies');
  })
  .catch((error) => {
    next(error);
  });

});

// Show individual view of movie

router.get('/movies/:id', (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movie => {
      res.render('movies/show', {movie});
    })
    .catch(error => {
      next(error);
  });
});


router.get('/movies/:id/edit', (req, res, next) => {
  Movie.findById(req.params.id)
  .then(movie => {
    res.render('movies/edit', {movie: movie})
  })
  .catch(error => {
    next(error);
  });
});

router.post('/movies/:id', (req, res, next) => {
  const updatedMovie = {
    title: req.body.title,
    plot: req.body.plots,
    genre: req.body.genre,
  };

  Movie.update({id: req.params.id}, updatedMovie)
    .then(() => {
      res.redirect('/movies');
    })
    .catch((error) => {
      next(error);
    });
});

router.post('/movies/:id/delete', (req, res, next) => {
  Movie.findById(req.params.id)
  .then(movie => {
    movie.remove()
      .then(() => {
        res.redirect('/movies');
      })
      .catch(error => {
        next(error);
      });
  });
});



module.exports = router;