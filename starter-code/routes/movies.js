const express = require("express");
const router = express.Router();
const dbHelper = require("../dbHelper");
const Movie = require("../models/movie.model");

router.get("/movies", async (req, res, next) => {
  try {
    const movies = await dbHelper.viewMovies();
    res.render("../views/movies/index.hbs", { movies });
  } catch (error) {
    next();
    return error;
  }
});

router.get("/movies/new", async (req, res, next) => {
  res.render("../views/movies/new.hbs");
});

router.post("/movies", async (req, res, next) => {
  try {
    const newMovie = new Movie(req.body);
    await newMovie.save();
    res.redirect("/movies");
  } catch (error) {
    res.render("../views/movies/new.hbs");
    return error;
  }
});

router.get("/movies/:id", async (req, res, next) => {
  try {
    const movie = await dbHelper.showMovie(req.params.id);
    res.render("../views/movies/show.hbs", movie);
  } catch (error) {
    next();
    return error;
  }
});

router.post("/movies/:id/delete", async (req, res, next) => {
  try {
    await dbHelper.deleteMovie(req.params.id);
    res.redirect("/movies");
  } catch (error) {
    next();
    return error;
  }
});

router.get("/movies/:id/edit", async (req, res, next) => {
  try {
    const movie = await dbHelper.showMovie(req.params.id);
    res.render("../views/movies/edit.hbs", movie);
  } catch (error) {
    next();
    return error;
  }
});

router.post("/movies/:id", async (req, res, next) => {
  try {
    const { title, genre, plot } = req.body;
    await dbHelper.updateMovie(req.params.id, { title, genre, plot });
    res.redirect("/movies");
  } catch (error) {
    next();
    return error;
  }
});

module.exports = router;
