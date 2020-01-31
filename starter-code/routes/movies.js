const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

router.get("/", async (req, res, next) => {
  try {
    const movies = await Movie.find();
    res.render("movies/index", { movies });
  } catch (e) {
    //check if this works
    next();
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findById(id);
    res.render("movies/show", { movie });
  } catch (e) {
    next();
  }
});

module.exports = router;
