const express = require("express");
const router = express.Router();
const Movie = require("../models/movieModel");

router.get("/movies", async (req, res, next) => {
  try {
    const dbResult = await Movie.find();
    res.render("moviesViews/moviesPage", { movies: dbResult });
  } catch (error) {
    next(error);
  }
});

router.get("/movies/new", (req, res, next) => {
  try {
    res.render("moviesViews/new");
  } catch (error) {
    next(error);
  }
});

router.post("/movies/:id/delete", async (req, res, next) => {
  try {
    let movieId = req.params.id;
    await Movie.findByIdAndRemove(movieId);
    res.redirect("/movies");
  } catch (error) {
    next(error);
  }
});

router.get("/movies/:id", async (req, res, next) => {
  try {
    const dbResult = await Movie.findById(req.params.id);
    res.render("moviesViews/moviedetails", { movie: dbResult });
  } catch (error) {
    next(error);
  }
});

router.post("/moviesadd", async (req, res, next) => {
  try {
    const newMovie = req.body;
    await Movie.create(newMovie);
    res.redirect("/movies");
  } catch (error) {
    next(error);
  }
});

router.get("/movies/:id/edit", async (req, res, next) => {
  try {
    const dbResult = await Movie.findById(req.params.id);
    res.render("moviesViews/edit", { movie: dbResult });
  } catch (error) {
    next(error);
  }
});

router.post("/moviesedit/:id", async (req, res, next) => {
    try {
      const modifiedMovie = req.body;
      await Movie.findByIdAndUpdate(req.params.id, modifiedMovie);
      res.redirect("/movies");
    } catch (error) {
      next(error);
    }
  });

module.exports = router;
