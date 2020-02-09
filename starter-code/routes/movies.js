const express = require("express");
const router = express.Router();
const Movies = require("../models/movie");

router.get("/movies", (req, res, next) => {
  Movies.find()
    .then(moviesFound => res.render("movies/index", { moviesFound }))
    .catch(err => {
      console.error("Error connecting to mongo");
      next(err);
    });
});

router.get("/movies/:id", (req, res, next) => {
  let { id } = req.params;
  Movies.findById(id)
    .then(movieFound => res.render("movies/show", movieFound))
    // .then(celebrityFound => res.json(celebrityFound))
    .catch(err => {
      console.error("Error connecting to mongo");
      next(err);
    });
});

router.post("/movies", (req, res, next) => {
  Movies.create({
    title: req.body.title,
    picture:
      req.body.picture ||
      "https://images-na.ssl-images-amazon.com/images/I/A1LjxA19XlL._SL1500_.jpg",
    genre: req.body.genre
  }).then(() => {
    Movies.find()
      .then(moviesFound => res.render("movies/index", { moviesFound }))
      .catch(err => {
        console.error("Error connecting to mongo");
        next(err);
      });
  });
});

router.post("/movies/:id/delete", (req, res, next) => {
  let { id } = req.params;
  Movies.findByIdAndRemove(id).then(() => {
    res.redirect("/movies").catch(err => {
      console.error("Error connecting to mongo");
      next(err);
    });
  });
});

router.post("/movies/:id/edit", (req, res, next) => {
  let { id } = req.params;
  Movies.findById(id)
    .then(movieFound => res.render("movies/edit", movieFound))
    .catch(err => {
      console.error("Error connecting to mongo");
      next(err);
    });
});

router.post("/movies/:id", (req, res, next) => {
  let { id } = req.params;
  let movie = {
    title: req.body.title,
    picture: req.body.picture,
    picture2: req.body.picture2,
    genre: req.body.genre,
    plot: req.body.plot
  };
  Movies.findByIdAndUpdate(id, movie)
    .then(() => Movies.find())
    .then(moviesFound => res.render("movies/index", { moviesFound }))
    .catch(err => {
      console.error("Error connecting to mongo");
      next(err);
    });
});
module.exports = router;
