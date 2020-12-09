const express = require("express");
const router = express.Router();
const MovieModel = require("./../models/Movie");

router.get("/movies", async (req, res, next) => {
  try {
    const movies = await MovieModel.find();
    res.render("./movies/index", { movies });
  } catch (err) {
    next(err);
  }
});

router.get("/movies/new", async (req, res, next) => {
  res.render("./movies/new");
});

router.get("/movies/:id", async (req, res, next) => {
  try {
    const movie = await MovieModel.findById(req.params.id);
    res.render("./movies/show", movie);
  } catch (err) {
    next(err);
  }
});

router.get("/movies/:id/edit", async (req, res) => {
  try {
    const movieToEdit = await MovieModel.findOne({
      _id: req.params.id,
    });
    res.render("./movies/formEditMovie", movieToEdit);
  } catch (err) {
    next(err);
  }
});

router.post("/movies/new", async (req, res, next) => {
  try {
    await MovieModel.create(req.body);
    res.redirect("/movies");
  } catch (err) {
    next(err);
  }
});

router.post("/movies/:id/delete", async (req, res, next) => {
  try {
    await MovieModel.findByIdAndRemove(req.params.id);
    res.redirect("/movies");
  } catch (err) {
    next(err);
  }
});

router.post("/movies/:id/edit", async (req, res, next) => {
  try {
    await MovieModel.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/movies");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
