const router = require('express').Router()

const Movie = require('../models/Movie')

router
  .get('/movies', async (req, res, next) => {

    const allMovies = await Movie.find() /* --- DUDA --- */
    res.render('movies/index', {allMovies})

  })
  .get('/movies/:id', async (req, res, next) => {

    const {id} = req.params
    const movie = await Movie.findById(id)
    // console.log(celebrity)
    res.render('movies/show', movie)

  })
  .get('/newmovie', (req, res, next) => {
    res.render('movies/new')
  })
  .post('/movies', async (req, res, next) => {

    const {title, genre, plot} = req.body
    const newMovie = {
      title: title,
      genre: genre,
      plot: plot
    }
    await Movie.create(newMovie)
    res.redirect('/movies')

  })
  .get('/movies/:id/delete', async (req, res, next) => {
    const {id} = req.params
    await Movie.findByIdAndDelete(id)
    res.redirect('/movies')
  })

  module.exports = router