const express = require("express")
const router = express.Router()
const Movie = require('../models/movie')

router.get('/movies/index', (req, res, next) => {
  Movie.find()
    .then((data) => {
      res.render('movies/index', {
        movies: data
      })
      console.log(data)
    })
})

router.get('/movies/new', (req, res, next) => {
  console.log("working")
  res.render('movies/new')
})

router.get('/movies/:id/edit', (req, res, next) => {
  console.log(req.params)
  let movieId = req.params.id
  Movie.findById(movieId)
    .then((data) => {
      console.log("=========");
      console.log(data.title)
      res.render('movies/edit', {
        movieId: movieId,
        name: data.title
      })
    })
})

router.post('/movies/update/:id', (req, res, next) => {
  console.log(req.body);
  movieId = req.params.id
  let movieEdit = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.genre
  }

  Movie.findByIdAndUpdate(movieId, movieEdit)
    .then((data) => {
      res.redirect('/movies/index')
    })
    .catch(next)

  // Movie.findByIdAndUpdate()
})


router.post('/movies/create', (req, res, next) => {
  console.log(req.body)
  let newMovie = {
    title: req.body.title,
    image: req.body.image,
    genre: req.body.genre,
    plot: req.body.plot
  }
  Movie.create(newMovie)
    .then((data) => {
      res.redirect('/movies/index')
    })
    .catch(next)
})

router.get('/movies/:id/delete', (req, res, next) => {
  console.log(req.params)
  Movie.findByIdAndRemove(req.params.id)
    .then((data) => {
      res.redirect('/movies/index')

    })
    .catch(next)
})

router.get('/movies/:id', (req, res, next) => {
  console.log(req.params.id)
  let id1 = req.params.id
  Movie.findById(id1)
    .then((data) => {
      res.render('movies/show', {
        movies: data
      })
    })
    .catch(next)

})


module.exports = router
