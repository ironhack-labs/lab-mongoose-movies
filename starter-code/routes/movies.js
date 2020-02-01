const Movie = require("../models/Movie");
const express = require("express");
const router = express.Router();

//list of movies
router.get("/", async (req, res, next) => {
  try {
    const seed = await Movie.find();
    res.render("movies/index", { seed });
  } catch (error) {
    console.log(error);
    next();
  }
});

//See one movies
router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const movie = await Movie.findById(id);
    res.render("movies/show", { movie });
  } catch (error) {
    console.log(error);
    next();
  }
});

module.exports = router;
