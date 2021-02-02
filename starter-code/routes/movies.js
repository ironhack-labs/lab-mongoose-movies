const express = require('express')
const router = express.Router()
const Movie = require("../models/Movie.model")

/* Movies */
router.get('/movies/index', (req, res, next) => {
  Movie.find()
   .then((movies) => {
      res.render("movies/index", { movies });
    })
    .catch((e) => next(e));
})

/* Add movies */
router.get('/movies/new', (req, res, next) => {
  res.render("movies/new")
})

router.post('/movies/new', (req, res, next) => {
  const movie = new Movie (req.body)
  movie.save()
  .then(m => res.redirect("/movies/index"))
  .catch(e => res.redirect("/movies/new"))
})

/* Edit movies */
router.get('/movies/:id/edit', (req, res, next) => {
  Movie.findById(req.params.id)
  .then((movie) => {
    res.render ('movies/new', movie)
  })
  .catch((e) => next(e))
})

router.post('/movies/:id/edit', (req, res, next) => {
  const movie = req.body
  Movie.findByIdAndUpdate(req.params.id, movie, { new: true })
  .then((m) => res.render('movies/show', m))
  .catch((e) => next(e))
})

/* Delete movies */
router.post('/movies/:id/delete', (req, res, next) => {
  Movie.findByIdAndDelete(req.params.id)
    .then(() => res.redirect("/movies/index"))
    .catch((e) => next(e))
})

/* Movies details */
router.get('/movies/:id', (req, res, next) => {
  Movie.findById(req.params.id)
    .then((movie) => {
    res.render ("movies/show", movie)
    })
    .catch((e) => next(e))
})

module.exports = router