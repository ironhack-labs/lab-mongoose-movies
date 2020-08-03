const express = require('express');
const router  = express.Router();
const MoviesModel = require('../models/movies.model')

router.get('/movies', (req, res, next) => {
    MoviesModel.find()
        .then ((movie) => {
            res.render('./movies/index.hbs', {movie});
        })
        .catch ((err) => {
            console.log('Error is:', err)
            next()
        })
  });

  router.get('/movies/:id', (req, res, next) => {
    MoviesModel.findById(req.params.id)
        .then((movie) => {
            res.render('./movies/show.hbs', {movie})
        })
        .catch ((err) => {
            console.log('Error is:', err)
            next()
        })
  })

router.get('/movies/new', (req, res, next) => {
    res.render('./movies/new.hbs')
})

router.post('/movies', (req, res) => {
    MoviesModel.create(req.body)
        .then(() => {
            res.redirect('/movies')
        })
        .catch(() => {
            res.render('./movies/new.hbs', {failedAdd: true})
        })
})

router.post('/movies/:id/delete', (req, res) => {
    MoviesModel.findByIdAndDelete(req.params.id)
        .then(() => {
            res.redirect('/movies')
        })
        .catch(() => {
            next()
            console.log('Error is:', err)
        })
})

router.get('/movies/:id/edit', (req, res, next) => {
    MoviesModel.findById(req.params.id)
    .then((result) => {
        res.render('./movies/edit.hbs', {result})
    })
    .catch(() => {
        next()
        console.log('Error is:', err)
    })
})

router.post('/movies/:id/edit', (req, res, next) => {
    let {title, genre, plot} = req.body
    let movieId = req.params.id
    MoviesModel.findByIdAndUpdate(movieId, {$set: {title, genre, plot}})
      .then(() => {
        res.redirect('/movies')
      })
      .catch (() => {
        res.render('./movies/edit.hbs', {failedAdd: true})
      })
  });

  
  module.exports = router;