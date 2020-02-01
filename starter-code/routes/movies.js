const express = require("express");
const router = express.Router();
const Movie = require("../models/movie");

router.get("/", async (req, res) => {
  try {
    const movies = await Movie.find();
    console.log(movies);
    res.render("movies/index", { movies });
  } catch (error) {
    next(error);
  }
});
