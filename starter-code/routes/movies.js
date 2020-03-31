const express = require('express');
const router  = express.Router();
const Movie = require('../models/movie');

router.get('/', (req, res, next) => {
  Movie
    .find()
    .then(data => {
      console.log(data)
      res.render('movies/index', {
        data
      })
    })
    .catch(error => console.log(error))
});

router.get('/new', (req, res, next) => {
  res.render('movies/new')
});

router.post('/', (req, res) => {
  console.log('body: ', req.body);

  const {
    title,
    genre,
    plot
  } = req.body;

  Movie.create({
    title,
    genre,
    plot
  })
  .then(response => {
    console.log(response);
    res.redirect('/movies');
  })
  .catch(error => {
    console.log(error)
    res.render('/movies/new')
  });
});

router.post('/:id/delete', (req, res, next) => {
  Movie
    .findByIdAndRemove(req.params.id)
    .then(() => res.redirect('/movies'))
    .catch(error => console.log(error))
});

router.get('/:id', (req, res, next) => {
  Movie
    .findById(req.params.id)
    .then(data => {
      console.log(data)
      res.render('movies/show', {
        data
      })
    })
    .catch(error => console.log(error))
});

module.exports = router;
