const express = require('express');
const Movie = require('../models/movie');
const router  = express.Router();

  router.get('/movies', async (req, res, next) => {
    const movie= await Movie.find()
   // next(catch(err => console.error('There was an error', err)));
    res.render('movies/index', {movie})
  });

  router.get('/movies/:id', async (req, res, next) => {
    const {id} = req.params
    const movie= await Movie.findById(id)
   // next(catch(err => console.error('There was an error', err)));
    res.render('movies/show', movie)
  });

  router.post("/movies/:movieId/delete", async (req, res) => {
    const { movieId } = req.params
    await Movie.findByIdAndRemove(movieId)
    res.redirect("/movies")
  })
  

  module.exports = router;