const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

// Retrieve -> Get a list of all movies
router.get("/", async (req, res, next) => {
  try {
    const movies = await Movie.find();
    res.render("movies/index", { movies });
  } catch (e) {
    //check if this works
    next();
  }
});

// Retrieve -> Get a specific movie
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findById(id);
    res.render("movies/show", { movie });
  } catch (e) {
    next();
  }
});

router.get("/new", async (req, res, next) => {
  res.render("movies/new");
});

// Create -> Add a new movie
router.post("/new", async (req, res, next) => {
  const { title, genre, plot } = req.body;
  const obj = await Movie.create({
    title,
    genre,
    plot
  });
  res.redirect("/celebrities/new");
});

// Delete -> Remove a movie
router.get("/:id/delete", async (req, res, next) => {
  const { id } = req.params;
  const obj = await Movie.findByIdAndDelete(id);
  res.redirect("/movies");
});

// Update -> Get the page for editing
router.get("/:id/edit", async (req, res, next) => {
  const { id } = req.params;
  try {
    const movie = await Movie.findById(id);
    res.render("movies/edit", { movie });
  } catch (e) {
    next();
  }
});

router.post("/:id", async (req, res, next) => {
  const { id } = req.params;
  const { title, genre, plot } = req.body;
  try {
    await Movie.findByIdAndUpdate(id, {
      title,
      genre,
      plot
    });
    res.redirect("/movies");
  } catch (e) {
    next();
  }
});

module.exports = router;
