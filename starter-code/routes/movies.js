const express = require('express');
const mongoose = require('mongoose');

const Movies = require('../models/movie');

const router = express.Router();

// ... Movies list
router.get('/', async (req, res) => {
  try {
    const movies = await Movies.find()
    console.log('Rendering movies');
    res.render('movies/index', { movies });
  } catch (err) {
    console.error('Movies ERROR:', err);
  }
});

// ... Add movie
router.get('/new', (req, res) => res.render('movies/new'));

router.post('/', async (req, res) => {
  try {
    const { title, genre, plot } = req.body;
    await Movies.create({ title, genre, plot });
    console.log('Adding movie');
    res.redirect('/movies');
  } catch (err) {
    console.error('Adding movie ERROR:', err);
    res.render('movies/new');
  };
});

// Edit movie
router.get("/:id/edit", async (req, res) => {
  try {
    const movie = await Movies.findById(req.params.id);
    console.log("Editing a movie");
    res.render("movies/edit", { movie });
  } catch (err) {
    console.error("Edit get ERROR:", err);
  };
});

router.post("/:id", async (req, res) => {
  try {
    const { title, genre, plot } = req.body;
    await Movies.findByIdAndUpdate(req.params.id, { title, genre, plot });
    console.log("Updated movie");
    res.redirect("/movies");
  } catch (err) {
    console.error("Edit post ERROR:", err);
  };
});

// ... Movie details
router.get('/:id', async (req, res) => {
  try {
    const movie = await Movies.findOne({ _id: req.params.id });
    console.log('Showing movie');
    res.render('movies/show', { movie });
  } catch (err) {
    console.error('Movie details ERROR:', err);
  };
});

// ... Delete a movie
router.post('/:id/delete', async (req, res) => {
  try {
    await Movies.findByIdAndDelete(req.params.id);
    console.log('Deleting a movie');
    res.redirect('/movies');
  } catch (err) {
    console.log('Delete movie ERROR:', err);
  }
});




module.exports = router;