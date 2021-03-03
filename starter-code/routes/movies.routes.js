const express = require("express");
const router = express.Router();
const MovieModel = require("./../models/movies"); //Path to MovieModel
const CelebrityModel = require("./../models/celbrity"); //Path to MovieModel

router.get("/", async (req, res, next) => {
  try {
    const movies = await movieModel.find();
    res.render("movies/movies", { movies });
  } catch (err) {
    next(err);
  }
});

router.get("/new", async (req, res, next) => {
  try {
    const celeb = await celebModel.find();
    res.render("movies/new-movie", { celeb });
  } catch (err) {
    next(err);
  }
});

router.post("/create", async (req, res, next) => {
  try {
    const { title, genre, plot, cast } = req.body;
    await movieModel.create({ title, genre, plot, cast });
    res.redirect("/movies");
  } catch (err) {
    console.log(err);
    res.redirect("/movies/new");
  }
});

router.get("/:id/delete", async (req, res, next) => {
  try {
    await movieModel.findByIdAndDelete(req.params.id);
    res.redirect("/movies");
  } catch (err) {
    next(err);
  }
});

router.get("/:id/edit", async (req, res, next) => {
  try {
    const movie = await movieModel.findById(req.params.id).populate("cast");
    const celeb = await celebModel.find();
    res.render("movies/edit-movie", { movie, celeb });
  } catch (err) {
    next(err);
  }
});

router.post("/:id", async (req, res, next) => {
  try {
    await movieModel.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/movies");
  } catch (err) {
    console.log(err);
    res.redirect("/movies/" + req.params.id + "/edit");
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const movie = await movieModel.findById(req.params.id).populate("cast");
    res.render("movies/movie-details", { movie });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
