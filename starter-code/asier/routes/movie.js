var express = require('express');
const Movie = require('../models/movie');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  Movie.find({}, (err, movie) => {
    if (err) { return next(err) }

    res.render('movie/index', {
      movie: movie
    });
  });
});

router.get('/new', (req, res, next) => {
  res.render('movie/new', {
    movie: new Movie()
  });
});


router.post('/', (req, res, next) => {
  const movieInfo = {
    name: req.body.name,
    genre: req.body.genre,
    plot: req.body.plot
  };

  // Create a new Product with the params
  const newMovie = new Movie(movieInfo);

  newMovie.save((err) => {
    if (err) {
      return res.render('movie/new', {
        movie: newMovie
      })
    }

    return res.redirect('/movie');
  });
});


router.get('/:id', (req, res, next) => {
  let id = req.params.id

  Movie.findById(id, (err, movie) => {
    res.render('movie/show', {
      movie: movie
    })
  })
});

router.get('/:id/edit', (req, res, next) => {
  let id = req.params.id

  Movie.findById(id, (err, movie) => {
    res.render('movie/edit', {
      movie: movie
    })
  })
});

router.post('/:id', (req, res, next) => {
  let id = req.params.id

  const updates = {
    name: req.body.name,
    genre: req.body.genre,
    plot: req.body.plot
  };

  Movie.findByIdAndUpdate(id, updates, (err, movie) => {
    if (err){ return next(err); }

    return res.redirect(`/movie/${movie._id}`);
  });
});

router.post('/:id/delete', (req, res, next) => {
  let id = req.params.id

  Movie.findByIdAndRemove(id, (err, movie) => {
    if (err){ return next(err); }

    return res.redirect('/movie');
  });
});


module.exports = router;
