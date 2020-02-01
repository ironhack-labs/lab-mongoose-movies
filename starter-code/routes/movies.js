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

//create a new movie
router.get("/new", async (req, res, next) => {
  res.render("movies/new");
});

//create the movie and send to the database
router.post("/new", async (req, res, next) => {
  const { title, genre, plot } = req.body;
  const obj = await Movie.create({
    title,
    genre,
    plot
  });
  res.redirect("/movies/new");
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

//delete the celebrity
router.get("/delete/:id", async (req, res, next) => {
  const { id } = req.params;
  const obj = await Movie.findByIdAndRemove(id);
  res.redirect("/movies");
});

module.exports = router;
