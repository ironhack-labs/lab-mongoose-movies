const express = require('express');

const router = express.Router();

const bodyParser = require('body-parser');

const Movie = require('../models/Movie');

router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', async (req, res, next) => {
  try {
    const allMovies = await Movie.find();
    res.render('../views/movies/index.hbs', { allMovies });
  } catch (err) {
    next();
    console.log(err);
  }
});

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const movieFound = await Movie.findById(id);
    res.render('../views/movies/show.hbs', movieFound);
  } catch (err) {
    next();
    console.log(err);
  }
});

router.get('/new', (req, res, next) => {
  res.render('../views/movies/new.hbs');
});

router.post('/new', async (req, res, next) => {
  const { title, genre, plot } = req.body;
  try {
    const movieCreated = await Movie.create({ title, genre, plot });
    res.redirect('/movies');
  } catch (err) {
    next();
    console.log(err);
  }
});

router.post('/:id/delete', async (req, res, next) => {
  const { id } = req.params;
  try {
    const movieDelete = await Movie.findByIdAndRemove(id);
    res.redirect('/movies');
  } catch (error) {
    next();
    console.log(error);
  }
});

router.get('/:id/edit', async (req, res, next) => {
  const { id } = req.params;
  try {
    const movieFound = await Movie.findById(id);
    res.render('../views/movies/edit.hbs', movieFound);
  } catch (error) {
    next();
    console.log(error);
  }
});

router.post('/:id/edit', async (req, res, next) => {
  const { id } = req.params;
  const { title, genre, plot } = req.body;
  try {
    const movieUpdated = await Movie.update({ _id: id }, { $set: { title, genre, plot } }, { new: true });
    res.redirect('/movies');
  } catch (error) {
    next();
    console.log(error);
  }
});

module.exports = router;
