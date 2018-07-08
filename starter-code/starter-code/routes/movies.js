const express = require('express');
const router  = express.Router();

const Movie = require('../models/movie.js')

router.get('/', (req, res, next) => {
  Movie.find({}).then(
    movies => {
      res.render('movies/index', {title: 'Movies', movies})
    })
})

router.get('/new', (req, res, next) => {
  res.render('movies/new', {title: 'Add a movie'})
})


router.post('/', (req, res, next) => {
  const {title, genre, plot} = req.body;
  new Movie({title, genre, plot})
  .save().then( () => {
    res.redirect('/movies');
  })
})

router.get('/:id/delete',(req,res) => {
  Movie.findByIdAndRemove(req.params.id, () => res.redirect('/movies'));
})


router.get('/:id/edit', (req,res) => {
  Movie.findById(req.params.id).then(movie => {
    res.render('movies/edit', {title: 'Edit movie', movie});;
  })
})

router.post('/:id/edit', (req,res) => {
  const {title, genre, plot} = req.body;
  Movie.findByIdAndUpdate(req.params.id,{title, genre, plot})
      .then( movie => {
        res.redirect('/movies')
      })
})


router.get('/:id', (req, res, next) => {
  Movie.findById(req.params.id).then(
    movie => {
      res.render('movies/show', {title: 'Movie detail', movie})
    })
})

module.exports = router;
