const express   = require('express');
const router    = express.Router();
const mongoose  = require('mongoose')
const Movie     = require('../models/movie.js')

////////////
// ROUTES //
////////////

router.get('/', (req, res, next) => {
  Movie.find()
  .then(movies => {
    res.render('movies/index', {movies})
  })
  .catch((error)=>{
    console.log(error)
    res.send(error)
    })
})
router.post('/', (req, res, next) => {
    Movie.create(req.body)
    .then(result => {
        console.log(result)
        res.redirect('/movies')
    })
    .catch((error)=>{
        console.log(error)
        res.send(error)
    })
})

router.get('/new', (req,res, next) => {
  res.render('movies/new')
})

router.get('/:id', (req, res, next) => {
  const celebrityID = req.params.id

  Movie.findById(celebrityID)
  .then(movie => {
    res.render('movies/show', movie)
  })
  .catch((error)=>{
        console.log(error)
        res.send(error)
    })
})

router.post('/:id', (req, res, next) => {

    const celebrityID = req.params.id
    Movie.findByIdAndUpdate(celebrityID, req.body)
    
    .then(result => {
        console.log(result)
        res.redirect('/movies')
    })
    .catch((error)=>{
        console.log(error)
        res.send(error)
    })
})

router.post('/:id/delete', (req, res, next) => {
    
    const celebrityID = req.params.id
    Movie.findByIdAndRemove(celebrityID)

    .then(result => {
        console.log(result)
        res.redirect('/movies')
    })
    .catch((error)=>{
        console.log(error)
        res.send(error)
    })
})

router.get('/:id/edit', (req, res, next) => {
   
    const celebrityID = req.params.id
    Movie.findById(celebrityID)

    .then(movie => {
        res.render('movies/edit', movie)
    })
    .catch((error)=>{
        console.log(error)
        res.send(error)
    })
})


module.exports = router; 