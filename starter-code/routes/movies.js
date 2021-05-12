const express = require('express');
const router  = express.Router();
const Movie = require("../models/Movie.model");

router.get('/movies', (req, res, next) => {
  Movie.find()
    .then((dbMovie) => {
      res.render('movies/index', {movies: dbMovie });
    })
    .catch((err) => next(err));
});

router.get('/movies/new', (req, res, next) => res.render('movies/new'));

router.post('/movies/new', (req, res, next) => {
  const { title, genre, plot } = req.body;
  const newMovie = new Movie({ title, genre, plot });
  newMovie.save()
    .then(() => res.redirect('/movies'))
    .catch(e => {
        next(e);
        res.redirect('/movies/new');
    });
});

router.get('/movies/:id', (req, res, next) => {
    const {id} = req.params;
    Movie.findById(id)
    .then(foundMovie => {
      console.log(foundMovie);
      res.render('movies/show', { movie: foundMovie });
    })
    .catch(e => next(e));
});

router.get('/movies/:id/edit', (req, res, next) => {
  const { id } = req.params;
  Movie.findById(id)
    .then(movieToEdit => {
      console.log(movieToEdit);
      res.render('movies/edit', { movie: movieToEdit });
    })
    .catch(e => next(e));
});

router.post('/movies/:id/edit', (req, res, next) => {
  const { id } = req.params;
  const { title, genre, plot } = req.body;
 
  Movie.findByIdAndUpdate(id, { title, genre, plot }, { new: true, runValidators: true})
  //i think it's nicer to redirect to the specific Movie so you ca see changes, so i did that
    .then(() => res.redirect(`/movies/${id}`))
    .catch(e => next(e));
});

router.post('/movies/:id/delete', (req, res, next) => {
  const { id } = req.params;

  Movie.findByIdAndDelete(id)
    .then(() => res.redirect('/movies'))
    .catch(e => next(e));
});

module.exports = router;