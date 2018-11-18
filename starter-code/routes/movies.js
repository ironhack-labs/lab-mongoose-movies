const express = require("express");
const router = express.Router();
const Movies = require("../models/movies");

router.get('/movies', (req, res, next) => {
  Movies.find()
  .then(movies => res.render('movies/index', { movies }))
  .catch(err => { next(err) });
});

router.get('/movies/new', (req, res, next) => {
  res.render('movies/new')
})

router.get('/movies/:id', (req, res, next) => {
  Movies.findById(req.params.id)
    .then(movies => res.render('movies/show', { movies }))
    .catch(err => { next(err) })
});

router.post('/movies', (req, res, next) => {
  const newMovies = new Movies()
  newMovies.title = req.body.title;
  newMovies.genre = req.body.genre;
  newMovies.plot = req.body.plot;
  newMovies.save()
  .then(() => res.redirect("/movies"))
  .catch(() => res.redirect("/movies/new"))
})

router.post('/movies/:id/delete', (req,res,next) => {
  Movies.findByIdAndRemove(req.params.id)
  .then(() => res.redirect('/movies'))
  .catch(error => next(error))
})
module.exports = router;
