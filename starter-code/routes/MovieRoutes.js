const express = require("express");
const router = express.Router();
const Movie = require("../models/Movies");

router.get("/movies/edit/:placeHolderID", async (req, res, next) => {
  try {
    const theMovie = await Movie.findById(req.params.placeHolderID);
    res.render("movie-views/Edit", { theMovie });
  } catch (err) {
    next(err);
  }
});

router.post("/movies/update/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    let update = { ...req.body };
    const response = await Movie.findByIdAndUpdate(id, update, {
      new: true
    });
    res.redirect("/movies/" + id);
  } catch (err) {
    next(err);
  }
});

router.get("/movies/", async (_, res, next) => {
  try {
    const movies = await Movie.find();
    console.log(movies);
    res.render("movie-views/AllMovies", { movies });
  } catch (err) {
    next(err);
  }
});

router.get("/movies/new", async (req, res, next) => {
  await res.render("movie-views/New");
});

router.post("/create-the-movie", async (req, res, next) => {
  try {
    const title = req.body.theNewTitle;
    const year = req.body.theNewYear;
    const producer = req.body.theNewProducer;
    Movie.create({
      title: title,
      year: year,
      producer: producer
    });
    await res.redirect("/");
  } catch (err) {
    next(err);
  }
});

router.get("/movies/:idOfMovie", async (req, res, next) => {
  try {
    const id = req.params.idOfMovie;
    const theMovie = await Movie.findById(id);
    res.render("movie-views/SingleMovie", { theMovie });
  } catch (err) {
    next(err);
  }
});

router.post("/movies/delete/:idOfMovie", async (req, res, next) => {
  try {
    await Movie.findByIdAndRemove(req.params.idOfMovie);
    res.redirect("/movies");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
