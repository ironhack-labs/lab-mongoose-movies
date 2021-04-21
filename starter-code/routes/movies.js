const express = require('express');
const mongoose = require('mongoose');
const Movie = require('../models/Movie.model');

const router = express.Router();

router.get('/movies', (req, res, next) => {
  Movie
    .find({})
    .then((resultsFromDB) => {
      res.status(200).render('movies/list', { movies: resultsFromDB })
    })
    .catch((err) => {
      console.error(`Error occured while listing movies: ${err}`);

      next(err);
    })
});

router.get('/movies/new', (req, res) => {
  res.status(200).render('movies/new')
});

router.get('/movies/:_id', (req, res, next) => {

  Movie
    .findById(req.params._id)
    .then((movieDetails) => {
      res.status(200).render('movies/show', movieDetails)
    })
    .catch((err) => {
      console.error(`Error occured while listing movies details: ${err}`);

      next(err);
    })
});

router.post('/movies/new', (req, res, next) => {
  const { title, genre, plot } = req.body;

  Movie
    .create({ title, genre, plot })
    .then((resultsFromDB) => {
      res.status(200).redirect("/movies")
    })
    .catch((err) => {
      console.error(`Error occured while adding movie ${err}`);
      res.redirect("movies/new")

      next(err)
    })
});

router.post('/movies/:id/delete', (req, res, next) => {
  const { id } = req.params;
  Movie
    .findByIdAndDelete(id)
    .then(() => {

      res.status(200).redirect('/movies')
    })
    .catch((err) => {
      console.error(`Error occured while deleting the movie: ${err}`);
      res.redirect(`/movies/${req.params._id}/delete`);

      next(err);
    })
});

router.get('/movies/:id/edit', (req, res, next) => {
  const { id } = req.params;

  Movie
    .findById(id)
    .then((result) => {
      res.status(200).render('movies/edit', result)
    })
    .catch((error) => {
      res.redirect(`/movies/${req.params._id}/edit`)
    })
});

router.post('/movies/:id/edit', (req, res, next) => {
  const { id } = req.params;
  const { title, genre, plot } = req.body;

  Movie
    .findByIdAndUpdate(id, { title: title, genre: genre, plot: plot })
    .then(() => {
      res.status(200).redirect('/movies')
    })
    .catch((err) => {
      console.error(`Error occured while editing the movie: ${err}`);
      res.redirect(`/movies/${req.params._id}/edit`);

      next(err);
    })
})

module.exports = router;