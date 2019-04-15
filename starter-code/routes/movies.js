const express = require('express');
const Movie = require('../models/movie');
const router = express.Router();

router.get('/', (req, res, next) => {
  Movie.find({})
    .then(responses => {
      res.render('./movies/index', {movies: responses})
    })
    .catch(err => {
      res.render('./error', err)
    });
});

router.get('/new', (req, res, next) => {
  res.render('./movies/new');
});

router.post('/new', (req, res, next) => {
  Movie.create(req.body)
    .then(result => {
      res.redirect('/movies')
    })
    .catch(err => {
      res.render('./error', err)
    });
});

router.post('/:id/delete', (req, res, next) => { 
  Movie.findOneAndDelete({_id : req.params.id})
    .then(result => {
      res.redirect('/movies');
    })
    .catch(err => {
      res.render('./error', err)
    })
});

router.get('/:id/edit', (req, res, next) => {
  Movie.findOne({_id: req.params.id})
    .then(movie => {
      res.render('./movies/edit', movie);
    })
    .catch(err => {
      res.render('./error', err)
    })
});

router.post('/:id/edit', (req, res, next) => {
  Movie.findOneAndUpdate({_id: req.params.id} , req.body)
    .then(result => {
      console.log('peliacu actualizada:', result);
      res.redirect('/movies');
    })
    .catch(err => {
      res.render('./error', err)
    })
})

router.get('/:idmovie', (req, res, next) => {
  Movie.findOne({_id : req.params.idmovie})
    .then(movie => { 
      res.render('./movies/show', movie);
    })
    .catch(err => {
      res.render('./error', err)
    })
})

module.exports = router;