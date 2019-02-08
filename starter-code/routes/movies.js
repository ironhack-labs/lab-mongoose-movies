let router = require('express').Router()
let Movie = require('../models/Movie')

// Edit
router.post('/:id/edit', (req,res,next)  => {
  Movie.findByIdAndUpdate(req.params.id, req.body)
  .then(movie => res.redirect('/movies/' + req.params.id))
  .catch(e=> next(e))
})

router.get('/:id/edit', (req,res,next)=> {
  Movie.findById(req.params.id)
  .then(movie => res.render('movies/edit', movie))
  .catch(e=> next(e))
})

// Delete
router.post('/:id/delete', (req,res,next) => {
  Movie.findByIdAndDelete(req.params.id)
  .then(celebrity => res.redirect('/movies'))
  .catch(e=> next(e))
})

// New
router.post('/new', (req,res,next)  => {
  Movie.create(req.body)
  .then(movie => res.redirect('/movies'))
  .catch(e=> {
    res.render('movies/new')
    console.log(e)
    next(e)})
})

router.get('/new', (req,res,next) => {
  res.render('movies/new')
})


//Detail
router.get('/:id', (req,res,next) => {
  Movie.findById(req.params.id)
  .then(movie => res.render('movies/show', movie))
  .catch(e=> next(e))
})

// List
router.get('/', (req,res,next) => {
  Movie.find()
  .then(movies => {
    res.render('movies/', {movies})
  })
  .catch(e=> next(e))
})

module.exports = router