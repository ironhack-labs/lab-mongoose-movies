const express = require('express');
const Movie = require('../models/movie');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const movies = await Movie.find();
    res.render('movies/index', { title: 'Movies', movies });
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { title, genre, plot } = req.body;
    await Movie.create({ title, genre, plot });
    res.redirect('/');
  } catch (error) {
    next(error);
  }
});

router.get('/new', async (req, res, next) => {
  try {
    res.render('movies/new', { title: 'New' });
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findById(id);
    res.render('movies/show', { title: 'Movie', movie });
  } catch (error) {
    res.redirect('movies/new');
  }
});

router.post('/:id/delete', async (req, res) => {
  try {
    const { id } = req.params;
    await Movie.findByIdAndDelete(id);
    res.redirect('/');
  } catch (error) {
    res.redirect('movies/new');
  }
});

router.get('/:id/edit', async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findById(id);
    res.render('movies/edit', { title: 'Movie', movie });
  } catch (error) {
    res.redirect('movies/new');
  }
});

router.post('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, genre, plot } = req.body;
    await Movie.findByIdAndUpdate(id, { title, genre, plot });
    res.redirect('/');
  } catch (error) {
    next(error);
  }
});

module.exports = router;
