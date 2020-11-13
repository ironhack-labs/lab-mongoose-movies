const express   = require('express');
const router    = express.Router();
const mongoose  = require('mongoose')
const Movie = require('../models/Movie.model')
const chalk = require('chalk')



router.get('/', (req, res, next) => {
  Movie.find()
  .then(movies => {
    res.render('movies/index', {movies})
  })
  .catch(err => {
    next(err)
    console.error(err)
  })
})
router.post('/', (req, res, next) => {
    Movie.create(req.body)
    .then(result => {
        console.log(result)
        res.redirect('/movies')
    })
})

router.get('/new', (req,res, next) => {
  res.render('movies/new')
})

router.get('/:id', (req, res, next) => {
  const id = req.params.id
  Movie.findById(id)
  .then(movie => {
    res.render('movies/show', movie)
  })
  .catch(err => {
    console.error(err)
    next(err)
  })
})

router.post('/:id', (req, res, next) => {
    const id = req.params.id
    console.log(req.body)
    Movie.findByIdAndUpdate(id, req.body)
    .then(result => {
        console.log(result)
        res.redirect('/movies')
    })
    .catch(err => {
        console.error(err)
        next(err)
    })
})

router.post('/:id/delete', (req, res, next) => {
    const id = req.params.id
    Movie.findByIdAndRemove(id)
    .then(result => {
        console.log(result)
        res.redirect('/movies')
    })
    .catch(err => {
        console.error(err)
        next(err)
    })
})

router.get('/:id/edit', (req, res, next) => {
    console.log(chalk.red.inverse.bold('editando'))
    const id = req.params.id
    Movie.findById(id)
    .then(movie => {
        res.render('movies/edit', movie)
    })
    .catch(err => {
        console.error(err)
        next(err)
    })
})


module.exports = router;