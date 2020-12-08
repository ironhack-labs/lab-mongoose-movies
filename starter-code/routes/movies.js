const express = require("express");
const router = new express.Router();
const MovieModel = require("./../models/Movie");

// GET - all movies page
router.get("/movies", async (req, res, next) => {
  try {
    const movie = await MovieModel.find();
    res.render("./movies/index", { movie });
  } catch (err) {
    next(err);
  }
});

// GET - create one movie with a form
router.get("/movies/new", async (req, res, next) => {
  const movies = await MovieModel.find();
  res.render("./movies/new", { movies });
});

// GET - update one movies(form)
router.get("/movies/:id/edit", async (req, res, next) => {
  try {
    const updateMovie = await MovieModel.findById(req.params.id);
    res.render("./movies/edit", updateMovie);
  } catch (err) {
    next(err);
  }
});

// GET - one movie by id
router.get("/movies/:id", async (req, res, next) => {
  try {
    const onemovie = await MovieModel.findById(req.params.id);
    res.render("./movies/show", onemovie);
  } catch (err) {
    next(err);
  }
});

// GET - delete one movie
router.get("/movies/:id/delete", async (req, res, next) => {
  try {
    await MovieModel.findByIdAndRemove(req.params.id);
    res.redirect("/movies");
  } catch (err) {
    next(err);
  }
});

// POST - create one movie with a form
router.post("/movies/new", async (req, res, next) => {
  try {
    const newMovie = { ...req.body };
    await MovieModel.create(newMovie);
    res.redirect("/movies");
  } catch (err) {
    next(err);
  }
});

// POST - update one movies (form)
router.post("/movies/:id/edit", async (req, res, next) => {
  try {
    const MovieUpdate = { ...req.body };
    await MovieModel.findByIdAndUpdate(req.params.id, MovieUpdate, {
      new: true,
    });
    res.redirect("/movies");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
