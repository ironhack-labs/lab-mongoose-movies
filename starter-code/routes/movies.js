const express = require('express');
const Movie = require('../models/movie');
const router = express.Router();

// localhost:3000/movies
router.get('/', (req, res, next) => {
  Movie.find({})
    .then(responses => {
      res.render('./movies/index', {movies: responses})
    })
    .catch(err => {
      console.log(err);
    });
});

// add a new movie - form (get);
router.get('/new', (req, res, next) => {
  res.render('./movies/new');
});

// add a new movie - create (post);
router.post('/new', (req, res, next) => {
  Movie.create(req.body)
    .then(result => {
      console.log('Added movie to database', result);
      res.redirect('/movies')
    })
    .catch(err => {
      console.log(err);
    });
});

// edit (get)
router.get('/:id/edit', (req, res, next) => {
  Movie.findOne({_id: req.params.id})
    .then(movie => {
      res.render('./movies/edit', movie);
    })
    .catch(err => {
      console.log(err);
    })
});

// edit (post)
router.post('/:id/edit', (req, res, next) => {
  Movie.findOneAndUpdate({_id: req.params.id} , req.body)
    .then(result => {
      console.log('Movie updated:', result);
      res.redirect('/movies');
    })
    .catch(err => {
      console.log(err);
    })
})

// delete a movie
router.post('/:id/delete', (req, res, next) => { 
  Movie.findOneAndDelete({_id : req.params.id})
    .then(result => {
      console.log('Movie deleted:', result);
      res.redirect('/movies');
    })
    .catch(err => {
      console.log(err);
    })
});


// view details of one movie
router.get('/:idmovie', (req, res, next) => {
  Movie.findOne({_id : req.params.idmovie})
    .then(movie => { 
      res.render('./movies/show', movie);
    })
    .catch(err => {
      console.log(err);
    })
})

module.exports = router;