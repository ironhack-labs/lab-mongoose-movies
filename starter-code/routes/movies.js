const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie.js');

/* GET movies*/
router.get('/', (req, res, next) => {
  Movie.find()
  .then(movies => {
    res.render("movies/index", {movies: movies});
    console.log(movies);
  })
  .catch(error => {
    console.log(error);
  });
});

// CREATE new Movie FORM
router.get('/new', (req, res, next) => {
  res.render("movies/new");
});

// UPDATE details of a Movie
router.post('/:id', (req, res, next) => {
  let newObj = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  };
  console.log('Update celeb: newObj', newObj)
  
  Movie.findByIdAndUpdate(req.params.id, newObj)
  .then(() => {
    res.redirect("/movies");
  })
  .catch(error => {
    console.log(error);
  });
});

// CREATE new Movie
router.post('/', (req, res, next) => {
  let newObj = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  };
  console.log('post new celeb: newObj', newObj)
  let newMovie = new Movie(newObj);
  newMovie.save()
  .then(()=>{
    res.redirect("/movies");
  })
  .catch (err => {
    console.log(err);
    res.render("movies/new");
  });
});

// SHOW details of a Movie
router.get('/:id', (req, res, next) => {
  Movie.findById(req.params.id)
  .then(movie => {
    res.render("movies/show", {movie: movie});
    console.log(movie);
  })
  .catch(error => {
    console.log(error);
  });
});


// DELETE a mMvie
router.post('/:id/delete', (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id)
  .then(() => {
    res.redirect("/movies");
  })
  .catch(error => {
    console.log(error);
    next();
  });
});

// EDIT a Movie
router.get('/:id/edit', (req, res, next) => {
  Movie.findById(req.params.id)
  .then(movie => {
    res.render("movies/edit", {movie});
  })
  .catch(err => {
    console.log(error);
    next();
  });
});



module.exports = router;
