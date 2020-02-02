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

router.get("/new", (req, res) => {
  res.render("movies/new");
});

router.post("/new", async (req, res) => {
  const { title, genre, plot } = req.body;
  await Movie.create({
    title,
    genre,
    plot
  });
  res.redirect("/movies");
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const obj = await Movie.findById(id);
  console.log(obj);
  res.render("movies/show", { obj });
});

router.get("/edit/:id", async (req, res) => {
  const { id } = req.params;
  const obj = await Movie.findById(id);
  res.render("movie/edit", {
    obj,
    isUpdate: true
  });
});
module.exports = router;
