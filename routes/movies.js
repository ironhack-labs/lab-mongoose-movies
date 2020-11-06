const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie.model');

router.get('/movies', async (req, res) => {
  const movies = await Movie.find()
  console.log(movies)
  res.render('movies/index', {movies})
})

router.get('/movies/new', async (req, res) => res.render('movies/new'))

router.get('/movies/:id', async (req, res) => {
  try {
    const {id} = req.params
    const movie = await Movie.findById(id)
    console.log(movie)
    res.render('movies/show', movie)
  } catch(e) {
    console.log(e, "🚑 Error")
  }
})

router.post('/movies', async (req, res) => {
  const {title, genre, plot} = req.body
  if (!title || !genre || !plot) {
    res.render('movies/new')
  }
  console.log('Movie Created')
  await Movie.create({title, genre, plot})
  res.redirect("/movies")
})

router.post('/movies/:id/delete', async (req, res) => {
  console.log(req.params)
  const {id} = req.params
  await Movie.findByIdAndDelete(id)
  res.redirect('/movies')
})

router.get('/movies/:id/edit', async (req, res) => {
  const {id} = req.params
  console.log(id)
  const movie = await Movie.findById(id)
  console.log(movie)
  res.render('movies/edit', movie)
})

router.post('/movies/:id', async (req, res) => {
  const {title, genre, plot} = req.body
  const {id} = req.params
  await Movie.findByIdAndUpdate(id, { title, genre, plot })
  res.redirect(`/movies/${id}`)
})

module.exports = router