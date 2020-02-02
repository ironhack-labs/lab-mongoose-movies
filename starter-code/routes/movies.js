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

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const obj = await Movie.findById(id);
  console.log(obj);
  res.render("movies/show", { obj });
});

module.exports = router;
