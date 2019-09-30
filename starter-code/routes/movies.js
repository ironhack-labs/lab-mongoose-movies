const express = require("express");
const router = express.Router();
const moviesModel = require("../models/Movie");

router.get("/", async (req, res, next) => {
  try {
    const movies = await moviesModel.find();
    res.render("movies/index", { movies });
  } catch (err) {
    throw new Error(err);
  }
});

router.get("/new", (req, res, next) => {
  res.render("movies/new");
});

router.post("/new", (req, res, next) => {
  console.log(req.body);
  const newPharse = new moviesModel(req.body);
  newPharse
    .save()
    .then(result => res.redirect("/movies"))
    .catch(err => res.render("movies/new"));
});

router.get("/:id", async (req, res, next) => {
  try {
    const movie = await moviesModel.findById(req.params.id);
    console.log(movie);
    res.render("movies/show", movie);
  } catch (err) {
    next(err);
  }
});
router.get("/:id/edit", async (req, res, next) => {
  try {
    const movie = await moviesModel.findById(req.params.id);
    console.log(movie);
    res.render("movies/edit", movie);
  } catch (err) {
    next(err);
  }
});
router.post("/:id/edit", async (req, res, next) => {
  try {
    const movie = await moviesModel.findByIdAndUpdate(req.params.id, req.body);

    res.redirect("/movies");
  } catch (err) {
    next(err);
  }
});

router.post("/:id/delete", async (req, res, next) => {
  try {
    const movie = await moviesModel.findByIdAndRemove(req.params.id);
    res.redirect("/movies");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
