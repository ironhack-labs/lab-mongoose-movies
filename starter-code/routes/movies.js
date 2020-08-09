const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model');


// Iteration 8: Get all Movies
router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(moviesFromDB => {
      console.log(`List of movies: ${moviesFromDB}`)
      res.render('./movies/index', { movies : moviesFromDB })
    })
    .catch((err) => {
      console.log(`Error while getting movies from the DB: ${err}`);
      next();
    });
});


// Iteration 9: Show Movie Details
router.get('/movies/:id', (req, res, next) => {
  const { id } = req.params;
  Movie.findById(id)
    .then(movie => {
      console.log(`Details of football movie: ${movie}`)
      res.render('./movies/show', movie)
    })
    .catch((err) => {
      console.log(`Error while getting movies from the DB: ${err}`);
      next();
    });
});


// Iteration 10: Create a new Movie
router.get('/movies/new', (req, res) => res.render('./movies/new'));

router.post('/movies/new', (req, res) => {
  const { title, genre, plot } = req.body;
  Movie.findOne({ title })
    .then(movieDocFromDB => {
      if (!movieDocFromDB) {
        Movie.create({ title, genre, plot })
        .then(() => res.redirect('/movies'));
      } else {
        res.render('./movies/new', { message: 'Movie already exist.' });
        return;
      }
    })
    .catch((err) => {
      console.log(`Error while creating a new movie: ${err}`);
      next();
    });
});


// Iteration 11: Delete a Celeb
router.post('/movies/:id/delete', (req, res, next) => {
  const { id } = req.params;
  Movie.findByIdAndDelete(id)
    .then(() => res.redirect('/movies'))
    .catch((err) => {
      console.log(`Error while deleting a movie: ${err}`);
      next();
    });
});


// Iteration 12: Edit a Movie
router.get('/movies/:id/edit', (req, res, next) => {
  const { id } = req.params;
  Movie.findById(id)
    .then(movieToEdit => {
      res.render('./movies/edit', movieToEdit);
    })
    .catch((err) => {
      console.log(`Error while editing a movie: ${err}`);
      next();
    });
});

router.post('/movies/:id/edit', (req, res, next) => {
  const { id } = req.params;
  const { title, genre, plot } = req.body;

  Movie.findByIdAndUpdate(
    id,
    { title, genre, plot },
    { new: true }
  )
  .then(() => res.redirect('/movies'))
  .catch((err) => {
    console.log(`Error while editing a movie: ${err}`);
    next();
  });
});


module.exports = router;