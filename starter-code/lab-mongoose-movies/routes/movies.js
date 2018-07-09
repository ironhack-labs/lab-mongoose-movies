const express = require('express');
const router  = express.Router();
const Movies = require('../models/movie');


/* GET movies page */
router.get('/', (req, res, next) => {
  Movies.find()
  .then((movies) => {
    res.render('Movies/index', {movies});
  })
  .catch((err) => {
    next(err);
  });
});

router.get('/new', (req, res, next) => {
  res.render('Movies/new');
});

router.post('/', (req, res, next) => {
  let movie = new Movies(req.body);
  movie.save()
  .then((result) => {
    console.log("Saved to db: ", result);
    res.redirect('/movies');
  })
  .catch((err) => {
    res.render('Movies/new', {movie: movie, error: true});
  });
});

router.post('/:id/delete', (req, res, next) => {
  Movies.findByIdAndRemove(req.params.id)
  .then((result) => {
    console.log("Removed from db: ", result);
    res.redirect('/movies');
  })
  .catch((err) => {
    next(err);
  });
});

router.get('/:id/edit', (req, res, next) => {
  Movies.findById(req.params.id)
  .then((movie) => {
    res.render('Movies/edit', {movie: movie})
  })
  .catch((err) => {
    next(err);
  });
});

router.post('/:id', (req, res, next) => {
  Movies.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then((result) =>{
    console.log("Updated db entry: ", result);
    res.redirect('/movies/' + req.params.id);
  })
  .catch((err) => {
    next(err);
  })
});

router.get('/:id', (req, res, next) => {
  Movies.findById(req.params.id)
    .then((movie) => {
      res.render('Movies/show', movie);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;