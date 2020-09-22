const express = require("express");
const router = new express.Router();

const MovieModel = require("../models/movie-model");

router.get("/", async (req, res, next) => {
  try {
    const movies = await MovieModel.find();
    res.render("movies/movies", { movies: movies });
  } catch (err) {
    next(err);
  }
});

router.get("/:id/details", async (req, res, next) => {
  try {
    const movie = await MovieModel.findById(req.params.id);
    res.render("movies/movie-details", { movie: movie });
  } catch (err) {
    next(err);
  }
});

router.get("/new-movie", async (req, res, next) => {
  try {
    res.render("movies/new-movie");
  } catch (err) {
    next(err);
  }
});

router.post("/new-movie", async (req, res, next) => {
  try {
    const newMovie = await MovieModel.create(req.body);
    res.redirect("/movies");
  } catch (err) {
    next(err);
  }
});

router.post("/:id/delete", async (req, res, next) => {
  try {
    const movieToDelete = await MovieModel.findByIdAndRemove(req.params.id);
    res.redirect("/movies");
  } catch (err) {
    next(err);
  }
});

router.get("/:id/edit", async (req, res, next) => {
  try {
    const movie = await MovieModel.findByIdAndUpdate(req.params.id);
    res.render("movies/edit-movie", { movie: movie });
  } catch (err) {
    next(err);
  }
});

router.post("/:id/edit", async (req, res, next) => {
  try {
    const movieToEdit = await MovieModel.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.redirect(`/movies/${req.params.id}/details`);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
