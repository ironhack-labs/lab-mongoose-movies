const express = require('express');	
const router  = express.Router();

const Movie = require ("../models/movie")

router.get ("/", (req, res, next) => {
  Movie.find()
  .then (movies => {
    res.render ("movies/index", {movies})
  })
  .catch (err => {
    next(err)
  });
});

router.get ("/new", (req, res, next) => {
  res.render("movies/new");
});

router.post ("/new", (req, res, next) => {
  const {title, genre, plot} = req.body;
  new Movie({title, genre, plot})
  .save().then (()=> {
    res.redirect("/movies")
  })
  .catch (() => {
    res.render("movies/new")
  });
});

router.get ("/:id", (req, res, next) => {
  let movieId = req.params.id;
  Movie.findById(movieId)
  .then (movie => {
    res.render("movies/show", {movie})
  })
  .catch (err => {
    next(err)
  });
});

router.get ("/:id/edit", (req, res, next) => {
  let movieId = req.params.id;
  Movie.findById(movieId)
  .then (movie => {
    res.render("movies/edit",{movie})
  })
  .catch (err => {
    next(err)
  });
});

router.post("/:id", (req, res, next) => {
  let {title, genre, plot} = req.body;
  Movie.findByIdAndUpdate(req.params.id, {title, genre, plot})
  .then (() => {
    res.redirect("/movies")
  })
  .catch (err => {
    next(err)
  });
});

router.post ("/:id/delete", (req, res, next) => { 
  let movieId = req.params.id;
  Movie.findByIdAndRemove(movieId)
    .then (() => {
      res.redirect("/movies")
    })
    .catch(err => {
      next(err)
    });
});

module.exports = router;