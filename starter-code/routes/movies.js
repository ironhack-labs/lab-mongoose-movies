const express = require('express');
const Movies = require('../models/movie');

const router  = express.Router();

  router.get('/', (req, res, next) => {
    Movies.find((err, movies) => {
      if (err) { return next(err); }

      res.render('movies/index', {
        movies: movies
      });
    });
  });

  router.get('/new', (req, res, next) => {
    res.render('movies/new', {
      movies: new Movies()
    });
  });

//cuidado con el orden en las rutas ^
  router.get('/:id', (req, res, next) => {
    const id = req.params.id;

    Movies.findById(id, (err, movies) => {
      res.render('movies/show', {
        movies: movies
      });
    });
  });


  router.post('/', (req, res, next) => {
    const MoviesInfo = {
      title: req.body.title,
      genre: req.body.genre,
      plot: req.body.plot
    };

  // Crea instancia
  const newMovies = new Movies(MoviesInfo);

//método
  newMovies.save((err) => {
    if (err) {
      return res.render('movies/new', {
        movies: newMovies
      });
    }
    return res.redirect('/movies');
  });
  });

  router.post('/:id/delete', (req, res, next) => {
    const id = req.params.id;

    Movies.findByIdAndRemove(id, (err, movies) => {
      if (err){ return next(err); }
      return res.redirect('/movies');
    });

  });

module.exports = router;
