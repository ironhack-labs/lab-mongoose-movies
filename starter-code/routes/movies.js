const express = require("express");
const router = express.Router();
const MovieModel = require("../models/movie");

router.get("/", async (req, res, next) => {
  try {
    const movies = await MovieModel.find();
    res.render("movies/index", { movies });
  } catch (err) {
    next(err);
  }
});

router.get("/new", (req, res) => {
  res.render("movies/new");
});

router.get("/:id", async (req, res, next) => {
  try {
    const movies = await MovieModel.findById(req.params.id);
    res.render("movies/show", movies);
  } catch (err) {
    next(err);
  }
});

router.post("/new", async (req, res, next) => {
  try {
    await MovieModel.create(req.body);
    res.redirect("/movies");
  } catch (err) {
    next(err);
  }
});

router.post("/:id/delete", async (req, res, next) => {
  try {
    await MovieModel.findByIdAndRemove(req.params.id);
    res.redirect("/movies");
  } catch (err) {
    next(err);
  }
});

router.get("/:id/edit", async (req, res, next) => {
  try {
    const movieEdit = await MovieModel.findById(req.params.id);
    res.render("movies/edit", movieEdit);
  } catch (err) {
    next(err);
  }
});

router.post("/:id/edit", async (req, res, next) => {
  try {
    await MovieModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.redirect("/movies");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
