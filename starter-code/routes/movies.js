const express = require('express');
const Movie = require('../models/movie');

const router = express.Router();

router.get('/movies/index', (req, res) => {
  Movie.find()
    .then((movies) => {
      res.render('movies/index', { movies });
    })
    .catch(err => console.log('Error:', err));
});

router.get('/movies/new', (req, res) => {
  res.render('movies/new');
});

router.post('/movies/new', (req, res) => {
  const { title, genre, plot } = req.body;
  console.log(req.body);
  const newMovie = new Movie({ title, genre, plot });
  newMovie.save()
    .then((movie) => {
      res.redirect('/movies/index');
    })
    .catch((error) => {
      console.log(error);
    });
});

router.post('/movies/:id/delete', (req, res) => {
  const { id } = req.params;
  Movie.findByIdAndRemove(id)
    .then((movie) => {
      res.redirect('/movies/index');
    })
    .catch(err => console.log(err));
});

router.get('/movies/:id/edit', (req, res) => {
  const id = req.params.id;
  Movie.findById(id)
    .then((movie) => {
      res.render('movies/edit', { movie });
    })
    .catch(err => console.log(err));
});

router.post('/movies/:id', (req, res) => {
  const { title, genre, plot } = req.body;
  Movie.update({ _id: req.params.id }, { $set: { title, genre, plot } })
    .then((movie) => {
      res.redirect('/movies/index');
    })
    .catch(err => console.log(err));
});

router.get('/movies/:id', (req, res) => {
  const { id } = req.params;
  Movie.findById(id)
    .then((movie) => {
      res.render('movies/show', { movie });
    })
    .catch(err => console.log("ERROR:", err));
});

module.exports = router;
