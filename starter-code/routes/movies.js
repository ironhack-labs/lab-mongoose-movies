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

//Delete the celebrity
router.get("/delete/:id", async (req, res, next) => {
  const { id } = req.params;
  const obj = await Movie.findByIdAndRemove(id);
  res.redirect("/movies");
});

//Update the Movie
router.get("/edit/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const seed = await Movie.findById(id);
    return res.render("movies/edit", { seed });
  } catch (error) {
    next();
  }
});

router.post("/edit/:id", async (req, res, next) => {
  const { id } = req.params;
  const { title, genre, plot } = req.body;
  try {
    await Movie.findByIdAndUpdate(id, {
      title,
      genre,
      plot
    });
    res.redirect("/movies");
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
