const express = require("express");
const router = express.Router();
const Movie = require("../models/movie");
const Celebrity = require("../models/celebrity");

router.get("/", (req, res, next) => {
  Movie.find().then((movies) => {
    res.render("./movies/index", { movies, movies });
  });
});

router.get("/new", (req, res, next) => {
  Celebrity.find().then((celebs) => {
    res.render("./movies/new", { celebs: celebs });
    //res.send({ celebs: celebs });
  });
});

router.post("/new", (req, res, next) => {
  Movie.create({
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot,
    cast: req.body.cast,
  }).then(() => {
    res.redirect("/movies");
  });
});

router.post("/:id/delete", (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id).then(() => res.redirect("/movies"));
});

router.get("/:id/edit", (req, res, next) => {
  let celebrityPromise = Celebrity.find();
  let moviePromise = Movie.findById(req.params.id).populate("cast");
  Promise.all([celebrityPromise, moviePromise]).then((data) => {
    res.render("movies/edit", { data: data });
    //res.send(data);
  });
});

router.post("/:id/edit", (req, res, next) => {
  updatedMovie = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot,
    cast: req.body.cast,
  };

  Movie.findByIdAndUpdate(req.params.id, updatedMovie).then(() => {
    res.redirect("/movies");
  });
});

router.get("/:id", (req, res, next) => {
  Movie.findById(req.params.id)
    .populate("cast")
    .then((movie) => {
      //res.send(movie);
      res.render("./movies/movie-details", { movie: movie });
    });
});
module.exports = router;
