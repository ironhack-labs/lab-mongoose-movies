const express = require('express');
const router  = express.Router();
const Movie = require('../models/movie.js');

router.get('/', (req, res, next) => {
  Movie.find()
    .then(movies => {
      console.log(movies);
      res.render("movies/index", { movies });
    })
    .catch(error => {
      console.log(error);
      next();
    })
});

router.get('/:id', (req, res, next) => {
  let movieId = req.params.id;
  Movie.findOne({'_id':movieId})
    .then(movie => {
      // console.log(celebrities);
      res.render("movies/show", { movie });
    })
    .catch(error => {
      console.log(error);
      next();
    })
});

router.get('/new', (req, res) => {
  res.render("movies/new");
});

router.post('/', (req, res, next) => {
  const {title, genre, plot} = req.body;
  const newMovie= new Movie ({title, genre, plot});
  newMovie.save()
  .then(movie => {
    // console.log(celebrities);
    res.redirect("/movies");
  })
  .catch(error => {
    console.log(error);
    next();
  })
})

router.post('/:id/delete', (req, res, next) => {
  let movieId = req.params.id;
  Movie.findByIdAndRemove({'_id':movieId})
    .then(movie => {
      res.redirect("/movies");
    })
    .catch(error => {
      console.log(error);
      next();
    })
})

router.get('/:id/edit', (req, res, next) => {
  let movieId = req.params.id;
  Movie.findOne({'_id':movieId})
    .then(movie => {
      // console.log(celebrities);
      res.render("movies/edit", { movie });
    })
    .catch(error => {
      console.log(error);
      next();
    })
});

router.post('/:id', (req, res, next) => {
  const {title, genre, plot} = req.body;
  Movie.update({_id: req.params.id}, { $set: {title, genre, plot}}, { new: true })
  .then((movie) => {
    res.redirect("/movies")
  })
  .catch((error) => {
    console.log(error)
  })
});

module.exports = router;