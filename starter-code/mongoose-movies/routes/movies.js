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

// GET detail
router.get("/:id", (req, res, next) => {
  Movie.findById( req.params.id)
    .then( movie => {
      res.render("movies/show", {movie} );
    })
});

/* GET home page */
router.get('/', (req, res, next) => {
  Movie.find()
    .then( movies => {
      res.render("movies/index", {movies});
    })
    .catch( error => {
    })
});


module.exports = router;
