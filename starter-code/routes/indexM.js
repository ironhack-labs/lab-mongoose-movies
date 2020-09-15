const express = require('express');
const Movie = require('../models/Movie');

const router = express.Router();

router.get('/movies', async (req, res, next) => {
  try {
    const movies = await Movie.find();

    res.render('movies/movies-list', { movies });
  } catch (error) {
    return next(error);
  }
});

router.get('/movies/new', async (req, res, next) => {
  try {
    res.render('movies/add-movie');
  } catch (error) {
    return next(error);
  }
});

router.get('/movies/:id', async (req, res, next) => {
  try {
    const { id } = req.params;

    const movie = await Movie.findById(id);

    res.render('movies/movies-detail', movie);
  } catch (error) {
    return next(error);
  }
});

router.post('/movies', async (req, res, next) => {
  try {
    const { title, genre, plot } = req.body;

    if (!title || !genre || !plot) {
      res.render('movies/add-movie', { errorMessage: 'Please input values to the fields' });

      return;
    }

    const newMovie = new Movie({ title, genre, plot });

    await newMovie.save();

    await res.redirect('/movies');
  } catch (error) {
    res.render('movies/add-movie');
    return next(error);
  }
});

router.post('/movies/:id/delete', async (req, res, next) => {
  try {
    const { id } = req.params;

    await Movie.findByIdAndDelete(id);

    res.redirect('/movies');
  } catch (error) {
    return next(error);
  }
});

router.get('/movies/:id/edit', async (req, res, next) => {
  try {
    const { id } = req.params;

    const movie = await Movie.findById(id);

    res.render('movies/edit-movie', { movie });
  } catch (error) {
    return next(error);
  }
});

router.post('/movies/:id', async (req, res, next) => {
  try {
    const { title, genre, plot } = req.body;
    const { id } = req.params;

    if (!title || !genre || !plot) {
      const movie = await Movie.findById(id);
      res.render('movies/edit-movie', { movie, errorMessage: 'Please input values to the fields' });

      return;
    }

    await Movie.findByIdAndUpdate(id, { $set: { title, genre, plot } });

    await res.redirect('/movies');
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
