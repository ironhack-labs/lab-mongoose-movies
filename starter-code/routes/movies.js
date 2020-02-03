const express = require('express');
const router  =  new express.Router();
const movieModel = require("../models/MovieModel");

router.get('/', (req, res, next) => {
  movieModel
  .find()
  .then(movies => {
    res.render("movies/index", {
      movies
    });
  })
  .catch(dbErr => {
    next(dbErr);
  })
})

//CREATE
router.get('/new', (req,res) => {
  res.render("movies/new");
})

router.post('/new', (req, res) => {
  const {title, genre, plot} = req.body;
  movieModel
    .create({
      title,
      genre,
      plot
  })
    .then(dbSuccess => {
      res.redirect('/movies')
    })
    .catch(dbErr => {
      res.render('/new')
    })
})

//READ
router.get('/:id', (req, res, next) => {
  movieModel
    .findById(req.params.id)
    .then(movie => {
      res.render("movies/show", {movie})
    })
    .catch(error => next(error))
})

//DELETE
router.post('/:id/delete', (req, res, next) => {
  movieModel
    .findByIdAndDelete(req.params.id)
    .then(success => {
      res.redirect('/movies')
    })
    .catch(err => next(err))
})

//UPDATE
router.get('/:id/edit', (req, res, next) => {
  movieModel
  .findById(req.params.id)
  .then(dbSuccess => {
    res.render('movies/edit', {movie: dbSuccess})
  })
  .catch(dbErr => next(dbErr))
})

router.post('/:id/edit', (req, res, next) => {
  const {title, genre, plot} = req.body;
  movieModel
  .findByIdAndUpdate(req.params.id, {
    title,
    genre,
    plot
  })
  .then(dbSuccess => {
    res.redirect('/movies')
  })
  .catch(dbErr => next(dbErr))
})



module.exports = router;