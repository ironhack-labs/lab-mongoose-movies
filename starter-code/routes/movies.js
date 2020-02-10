const express = require('express');
const router = express.Router();
const Movies = require("../models/Movies");

router.get('/', (req, res, next) => {
  Movies.find()
    .then((movie) => {
      res.render('movies/index', {
        movie
      })
    })
});

router.get('/new', (req, res, next) => {
  res.render('movies/new');
});

router.post("/new", (req, res) => {
  Movies.create({
      title: req.body.title,
      genre: req.body.genre,
      plot: req.body.plot
    })
    .then(res.redirect('/movies'))
    .catch(res.redirect('/movies/new', {
      error: `There was an error trying to create ${req.body.title}`
    }));
});

router.post('/:id/delete', (req, res, next) => {
  Movies.findByIdAndDelete(req.params.id)
    .then(res.redirect('/movies'))
    .catch(res.redirect('/movies', {
      error: `There was an error trying to delete the star`
    }));
});


router.get('/:id', (req, res, next) => {
  Movies.findById(req.params.id)
    .then(movie => {
      res.render('movies/show', movie)
    })
});















module.exports = router;