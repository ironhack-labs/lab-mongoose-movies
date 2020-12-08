const express = require("express");
const router = express.Router();
const MovieModel = require("./../models/movie");
const mongoose = require("mongoose");

router.get("/", async (req, res, next) => {
  try {
    const mov = await MovieModel.find();
    res.render("movies/index", { mov });
  } catch (err) {
    next(err);
  }
});

router.get("/show/:id", async (req, res, next) => {
  try {
    const findMovs = await MovieModel.findById(req.params.id);
    res.render("movies/show", findMovs);
  } catch (err) {
    next(err);
  }
});

router.get("/new", (req, res) => {
  res.render("movies/new");
});

router.post("/", async (req, res, next) => {
  const newMovie = { ...req.body };
  try {
    await MovieModel.create(newMovie);
    res.redirect("/movies");
  } catch (err) {
    next(err);
  }
});

router.post("/:id/delete", async (req, res, next) => {
  try {
    // use the model to delete one label by id
    const deletedMovie = await MovieModel.findByIdAndRemove(req.params.id);
    res.redirect("/movies"); // then redirect to labels full list
  } catch (err) {
    next(err);
  }
});

module.exports = router;
