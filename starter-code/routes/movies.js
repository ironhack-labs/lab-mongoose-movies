const express = require("express");
const Movie = require("../models/Movie");
const router = express.Router();

router.get("/", async (req, res, next) => {
  const dbResult = await Movie.find();
  res.render("movies/movies", { movies: dbResult });
});

router.get("/add-new-movie", async (req, res, next) => {
  res.render("movies/createForm", {});
});

router.post("/add-new-movie", async (req, res, next) => {
  const dbResult = await Movie.create(req.body);
  console.log(req.body);
  res.redirect("/movies");
});

router.get("/:id", async (req, res, next) => {
  const dbResult = await Movie.findById(req.params.id);
  res.render("movies/chosenMovie", { selectedMovie: dbResult });
});

module.exports = router;
