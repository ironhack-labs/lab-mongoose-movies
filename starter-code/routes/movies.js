const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

router.get("/movies", async (req, res, next) => {
  const movies = await Movie.find({});
  if (movies) {
    res.render("movies", { movies });
  } else {
    next();
  }
});

router.get("/movies/new", async (req, res) => {
  res.render("movies/new");
});

router.get("/movies/:_id", async (req, res, next) => {
  const { _id } = req.params;
  const movie = await Movie.findOne({ _id });
  if (movie) {
    res.render("movies/show", { movie });
  } else {
    next();
  }
});

router.get("/movies/:_id/edit", async (req, res, next) => {
  const { _id } = req.params;
  const movie = await Movie.findOne({ _id });
  if (movie) {
    res.render("movies/edit", { movie });
  } else {
    next();
  }
});

router.post("/movies", async (req, res, next) => {
  const { title, genre, plot } = req.body;
  const movie = { title, genre, plot };
  const createResult = await Movie.create(movie);
  if (createResult) {
    res.redirect("/movies");
  } else {
    res.render("/movies/new", { error: "Error saving the movie" });
  }
});

router.post("/movies/:_id", async (req, res) => {
  const { _id } = req.params;
  const { title, genre, plot } = req.body;
  const movie = await Movie.findByIdAndUpdate({ _id }, { title, genre, plot });
  if (movie) {
    res.redirect("/movies");
  } else {
    res.render("/movies/edit", { movie, error: "Error saving the movie" });
  }
});

router.post("/movies/:_id/delete", async (req, res, next) => {
  const { _id } = req.params;
  const deleteResult = await Movie.findOneAndDelete({ _id });
  if (deleteResult) {
    res.redirect("/movies");
  } else {
    next();
  }
});

module.exports = router;
