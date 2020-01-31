const express = require("express");
const router = express.Router();
const Movie = require("../models/movies");

// R : Retrieve list of celebs
router.get("/index", async (req, res) => {
  const movie = await Movie.find();
  res.render("movies/index", { movie });
});

// R : Retrieve details of a particular celeb
router.get("/show/:id", async (req, res) => {
  const { id } = req.params;
  const movie = await Movie.findById(id);
  res.render("movies/show", { movie });
});

// C: Show add a movie form
router.get("/add", (req, res, next) => {
  res.render("movies/new");
});

// C: POST new movie
router.post("/add", async (req, res, next) => {
  try {
    const { title, genre, plot } = req.body;
    const obj = await Movie.create({
      title,
      genre,
      plot
    });
    console.log(obj, "added to database");
    res.redirect("/movies/index");
  } catch (err) {
    console.log(err);
    res.redirect("/movies/add");
  }
});

// D: delete celeb in database
router.get("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Movie.findByIdAndRemove(id);
    res.redirect("/movies/index");
  } catch (err) {
    console.log(err);
    res.redirect("/movies/index");
  }
});

// U: update celeb in database
router.get("/edit/:id", async (req, res) => {
  const { id } = req.params;
  const obj = await Movie.findById(id);
  res.render("movies/edit", { obj });
});

router.post("/edit/:id", async (req, res) => {
  const { id } = req.params;
  const { title, genre, plot } = req.body;
  await Movie.findByIdAndUpdate(id, {
    title,
    genre,
    plot
  });
  res.redirect("/movies/index");
});

module.exports = router;
