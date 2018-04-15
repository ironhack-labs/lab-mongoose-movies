const express = require('express');
const router  = express.Router();
const Movie = require("../models/Movie");

// GET new movie
router.get("/new", (req, res, next) => {
  res.render("movies/new");
});

// POST new movie
router.post("/", (req, res, next) => {
  const {title, genre, plot} = req.body;
  const movie = new Movie({title, genre, plot});

  movie.save()
    .then( movie => {
      console.log(movie);
      res.redirect("/movies");
    })
    .catch( () => {
      res.render("movies/new");
    })
});

// POST delete
router.post("/:id/delete", (req, res, next) => {
  Movie.findByIdAndRemove( req.params.id )
    .then( () => {
      res.redirect("/movies");
    })
    .catch( err => {
      next();
      return err;
    })
});

// GET edit
router.get("/:id/edit", (req, res, next) => {
  Movie.findById( req.params.id )
    .then( (movie) => {
      res.render("movies/edit", {movie});
    })
    .catch( err => {
      next();
      return err;
    })
});

// POST edit
router.post("/:id", (req, res, next) => {
  const {title, genre, plot} = req.body;
  const updates = {title, genre, plot};
  Movie.findByIdAndUpdate(req.params.id, updates)
    .then( () => {
      res.redirect("/movies");
    })
    .catch( err => {
      next();
      return err;
    })
});

// GET detail
router.get("/:id", (req, res, next) => {
  Movie.findById( req.params.id)
    .then( movie => {
      res.render("movies/show", {movie} );
    })
    .catch( err => {
      next();
      return err;
    })
});

/* GET home page */
router.get('/', (req, res, next) => {
  Movie.find()
    .then( movies => {
      res.render("movies/index", {movies});
    })
    .catch( err => {
      next();
      return err;
    })
});


module.exports = router;
