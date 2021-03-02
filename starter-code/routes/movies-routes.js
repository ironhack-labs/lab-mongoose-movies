const express = require("express");
const router = express.Router();
const MovieModel = require("../models/movie");

router.get('/movies/new', (req, res) => {
  res.render('movies/new-movie', MovieModel);
});

router.post("/movies/create", (req, res, next) => {
  const { title, genre, plot, cast } = req.body;
  MovieModel.create(req.body)
  .then(() => {
    console.log("------MOVIE CREATED !!!-------");
    res.redirect("/movies");
  })
  .catch((error) => {
    next(error);
  });
});

router.get("/movies", async (req, res, next) => {
  try {
    const movies = await MovieModel.find();
    console.log(movies);
    res.render("movies/movies", {movies});
  } catch(err) {
    next(err);
  }
});

module.exports = router;