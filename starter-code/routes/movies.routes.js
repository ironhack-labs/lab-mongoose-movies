const express = require('express');
const Movie = require('../models/Movie');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const movies = await Movie.find();

    res.render('movies-views/movies', { movies })
  } catch(error) {
    next(error);
    
    return error; 
  }
});

router.get('/new', (req, res, next) => {
  res.render('movies-views/create-movie');
});


router.get('/:movieId', async (req, res, next) => {
  try {
    const { movieId } = req.params;
    const movie = await Movie.findById(movieId);

    res.render('movies-views/movies-detail', movie )
  } catch(error) {
    next(error);
    
    return error; 
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { title, genre, plot } = req.body;

    const newMovie = new Movie({
      title,
      genre,
      plot,
    });

    await newMovie.save();

    res.redirect('/movies')
  } catch(error) {
    res.render('movies-views/create-movie', { errorMessage: 'Deu ruim, tente novamente!'})
  }
});

router.post('/:movieId/delete', async (req, res, next) => {
  try {
    const { movieId } = req.params;
    
    await Movie.findByIdAndDelete(movieId);

    res.redirect('/movies')
  } catch(error) {
    next(error);

    return error;
  }
});

router.get('/:movieId/edit', async (req, res, next) => {
  try {
    const { movieId } = req.params;
    
    const movie = await Movie.findById(movieId);

    res.render('movies-views/movies-edit', movie);
  } catch(error) {
    next(error);

    return error;
  }
});

router.post('/:movieId', async (req, res) => {
  try {
    const { movieId } = req.params;
    const { title, genre, plot } = req.body;

    await Movie.findByIdAndUpdate(movieId, { $set: { title, genre, plot } });

    res.redirect('/movies')
  } catch(error) {
    next(error);

    return error;
  }
});

module.exports = router;