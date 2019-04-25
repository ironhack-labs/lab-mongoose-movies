const express = require('express');

const router = express.Router();
const Movies = require('../models/Movie.js');

// Find All
router.get('/movie', (req, res) => {
  Movies.find()
    .then((result) => {
      res.render('movie/movie-list', { movies: result });
    })
    .catch((err) => {
      throw new Error(err);
    });
});

// List of all movies
router.get('/movie/list', (req, res) => {
  Movies.find()
    .then((result) => {
      res.render('movie/movie-list', { movies: result });
    })
    .catch((err) => {
      throw new Error(err);
    });
});

// show one movie detail
router.get('/movie/detail/:id', (req, res) => {
  Movies.findById(req.params.id)
    .then((result) => {
      res.render('../views/movie/movie-detail', { movies: result });
    })
    .catch((err) => {
      throw new Error(err);
    });
});

// Add new movie - get
router.get('/movie/add', (req, res) => {
  res.render('movie/add-movie-form');
});

// Add Post
router.post('/movie/add', (req, res) => {
  const { title, genre, plot } = req.body;
  const newMovie = new Movies({ title, genre, plot });
  newMovie
    .save()
    .then(() => {
      res.redirect('/movie');
    })
    .catch((error) => {
      console.log(error);
    });
});

// Del
router.get('/movie/del/:id', (req, res) => {
  Movies.findOneAndDelete(req.params.id)
    .then(() => {
      res.redirect('/movie?msg=Celebrity+Removed');
    })
    .catch((err) => {
      throw new Error(err);
    });
});

// Edit get
router.get('/movie/edit/:id', (req, res) => {
  Movies.findById(req.params.id)
    .then((result) => {
      res.render('movie/edit-movie-form', { movies: result });
    })
    .catch((err) => {
      throw new Error(err);
    });
});

// Edit post
router.post('/movie/edit/:id', (req, res) => {
  Movies.findByIdAndUpdate(req.params.id, { $set: req.body })
    .then(() => {
      res.redirect('/movie');
    })
    .catch((err) => {
      throw new Error(err);
    });
});

module.exports = router;
