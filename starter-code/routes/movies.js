const express = require('express');
const router = express.Router();

const Movie = require('../models/movie')


router.get('/', (req, res, next) => {
  Movie.find()
  .then(moviesDB => {
    res.render('movies', {
      movies: moviesDB
    });
  })
  .catch(error => {
    console.log(error)
    next()
  })
});

router.post('/', (req, res, next) => {
  const newMovie = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  }

  Movie.create(newMovie)
    .then(() => {
      res.render('movies/new')
    })
    .catch((error) => {
      console.log(error)
      next()
    })
})

router.get('/new', (req, res, next) => {
  res.render("movies/new");
});

router.get('/:id', (req, res, next) => {
  Movie.findById(req.params.id)
    .then(theMovie => {
      res.render('movies/show', {
        movies: theMovie
      });
    })
    .catch(error => {
      console.log(error)
      next()
    })
});

router.post('/:id', (req, res, next) => {
  Movie.updateOne({
      _id: req.body.id
    }, {
      title: req.body.title,
      genre: req.body.genre,
      plot: req.body.plot
    })
    .then(() => {
      res.redirect('/movies')
    })
})

router.post('/delete/:id', (req, res, next) => {
  Movie.findByIdAndDelete(req.body.id)
    .then(() => {
      res.render('movies')
    })
    .catch((error) => {
      console.log(error)
      next()
    })
})

router.get('/edit/:id', (res, req, next) => {
  Celebrity.findById(req.params.id)
    .then(theCelebrity => {
      res.render('celebrities/edit', theCelebrity)
    })
    .catch((error) => {
      console.log(error)
      next()
    })
})

router.post('/edit/:id', (req, res, next) => {
  Movie.findOne({
      _id: req.body.id
    })
    .then((movie) => {
      res.render('movies/edit', movie)
    })
    .catch((error) => {
      console.log(error)
      next()
    })
});

module.exports = router;
