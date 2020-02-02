const express = require("express");
const router = express.Router();
const Movie = require("../models/movie.js");

router.get("/", (req, res, next) => {
   Movie.find()
  .then(movies => {
  res.render("movies/index", { movies });
  })
  .catch(error => {
    next();
    console.log(error);
  })
});

router.get("/:id", (req, res, next) => {
    Movie.findById(req.params.id)
    .then(moviesId => {
      res.render("movies/show", { movies: moviesId });
    })
    .catch(error => {
      next();
      console.log(error);
    })
  });

router.get("/new", (req, res, next) => {
    res.render("movies/new"); 
});

router.post("/", (req, res, next) => {
  const { title, genre, plot } = req.body;
  const object = Movie.create ({
    title,
    genre,
    plot,
  })
  .then(addMovie => {
  res.redirect("/movies")
  })
  .catch(error => {
    res.render("/movies/new")
  })
  object.save();
  });

  router.post("/:id/delete", (req, res, next) => {
    Movie.findByIdAndRemove(req.params.id)
    .then(moviesDel => {
      res.redirect("/movies")
    })
    .catch(error => {
      next();
      console.log(error);
    })
  })

module.exports = router;