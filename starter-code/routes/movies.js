const express = require('express');
const router = express.Router();
const Movies = require ('../models/movie.model');

router.get('/movies', (req, res, next) => {
  Movies.find({})
      .then(moviesAll => { 
          res.render('movies/index', {moviesAll})
      })
      .catch(e => {
          console.log("Error search celebrities", e)
          res.redirect('/')
      })
})

router.post('/movies', (req, res, next) => {
    Movies.create(req.body)
        .then(movie => { 
            console.log(`${movie.name} add to database`);
            res.redirect('/movies')
        })
        .catch(e => {
            console.log("Error add celebrity to database", e)
            res.redirect('/movies/new')
        })
})

router.get('/movies/new', (req, res, next) => {
    res.render('movies/new')
})

router.post('/movies/:id/delete', (req, res, next) => {
    Movies.findByIdAndDelete(req.params.id)
        .then(()=> {
            console.log('Movie deleted');
            res.redirect('/movies')
        })
        .catch(e => {
            console.log("Error movie", e)
            res.redirect('not-found')
        })
})

router.get('/movies/:id/edit', (req, res, next) => {
    Movies.findById(req.params.id)
        .then(movie => {
            res.render('movies/edit', {movie})
        })
        .catch(e => {
            console.log("Error celebrity", e)
            res.redirect('not-found')
        })
})

router.post('/movies/:id', (req, res, next) => {
    Movies.findByIdAndUpdate(req.params.id, req.body)
        .then(movie=> {
            res.redirect('/movies')
        })
        .catch(e => {
            console.log("Error celebrity", e)
            res.redirect('not-found')
        })
})

router.get('/movies/:id', (req, res, next) => {
    Movies.findById(req.params.id)
        .then(movie=> {
            res.render('movies/show', {movie})
        })
        .catch(e => {
            console.log("Error celebrity", e)
            res.redirect('/movies')
        })
})







module.exports = router;