const express = require('express');
const router  = express.Router();
const Movie = require('../models/movies');

// Listing Our movies
router.get('/', (req, res, next) => {
  Movie.find()
    .then(movies => {
      // console.log(movies);
      res.render("movies/index", { movies });
    })
    .catch(error => {
      next(error);
    });
});

// The Movie Details Page
router.get('/movies/:id', (req, res, next) => {
  let movieId = req.params.id;
  if (!/^[0-9a-fA-F]{24}$/.test(movieId)) { 
    return res.status(404).render('not-found');
  }
  Movie.findOne({'_id': movieId})
    .then(movie => {
      // console.log(movie);
      if (!movie) {
          return res.status(404).render('not-found');
      }
      res.render("movies/show", { movie });
    })
    .catch(error => {
      next(error);
    });
});

// Adding New Movies
router.get("/new", (req, res, next) => {
  res.render("movies/new");
});

router.post('/', (req, res, next) => {
  const { title, genre, plot } = req.body;
  const newMovie = new Movie({ title, genre, plot });
  newMovie.save()
  .then((movie) => {
    console.log(movie);
    res.redirect('/movies');
  })
  .catch((error) => {
    console.log(error);
  });
});

// Deleting Movies
router.post('/:id/delete', (req, res, next) => {
  let movieId = req.params.id;
  if (!/^[0-9a-fA-F]{24}$/.test(movieId)) { 
    return res.status(404).render('not-found');
  }
  Movie.findByIdAndRemove({'_id': movieId})
    .then(movie => {
      // console.log(movie);
      if (!movie) {
          return res.status(404).render('not-found');
      }
      res.redirect('/movies');
    })
    .catch(error => {
      next(error);
    });
});

// Editing Movies
router.get('/edit', (req, res, next) => {
  Movie.findOne({_id: req.query.movie_id})
  .then((movie) => {
    res.render("movies/edit", {movie});
  })
  .catch((error) => {
    console.log(error);
  });
});

router.post('/:id', (req, res, next) => {
  const { title, genre, plot } = req.body;
  Movie.update({_id: req.query.movie_id}, { $set: { title, genre, plot }}, { new: true })
  .then((movie) => {
    res.redirect('/movies');
  })
  .catch(error => {
    next(error);
  });
});


module.exports = router;