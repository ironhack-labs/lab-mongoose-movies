const express = require("express");
const router = express.Router();
const Movie = require("../models/movie");
const multer = require("multer");

// Route to upload from project base path
const upload = multer({ dest: "./public/uploads" });

/* GET show all movies */
router.get("/", async (req, res, next) => {
  try {
    const movies = await Movie.find();
    res.render("movies/index", { movies });
  } catch (error) {
    console.log(`Movies.js - Error retrieving all movies ${error}`);
  }
});

/* GET form to add a movie */
router.get("/new", (req, res, next) => {
  res.render("movies/new");
});

/* GET form to add a movie */
router.post("/new", upload.single("photo"), async (req, res, next) => {
  try {
    const movie = new Movie({
      title: req.body.title,
      genre: req.body.genre,
      plot: req.body.plot,
      picPath: `/uploads/${req.file.filename}`
    });
    const obj = await Movie.create(movie);
    console.log(`Movies.js - Added new movie ${obj}`);
    res.redirect("/movies");
  } catch (error) {
    console.log(`Movies.js - Error adding new movie ${error}`);
    res.render("movies/new");
  }
});

/* GET find a movie according to its id */
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findById(id);
    res.render("movies/show", { movie });
  } catch (error) {
    console.log(`Movie.js - Error finding movie by id ${error}`);
  }
});

/* POST delete a movie according to its id */
router.post("/:id/delete", async (req, res, next) => {
  try {
    console.log("EEEEENTRA");
    const { id } = req.params;
    const movie = await Movie.findByIdAndRemove(id);
    console.log(`Movies.js - Movie deleted ${movie}`);
    res.redirect("/movies");
  } catch (error) {
    console.log(`Movies.js - Error deleting movie by id ${error}`);
  }
});

/* GET edit a movie according to its id */
router.get("/:id/edit", async (req, res, next) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findById(id);
    res.render("movies/edit", { movie });
  } catch (error) {
    console.log(`Movies.js - Error editing movie by id ${error}`);
  }
});

/* GET update a movie according to its id */
router.post("/:id", upload.single("photo"), async (req, res, next) => {
  try {
    const { id } = req.params;
    const picPath = `/uploads/${req.file.filename}`;
    const { title, genre, plot } = req.body;

    const movie = await Movie.findByIdAndUpdate(id, {
      title,
      genre,
      plot,
      picPath
    });
    console.log(`Movies.js - Movie updated ${movie} `);
    res.redirect("/movies");
  } catch (error) {
    console.log(`Movies.js - Error updating movie by id ${error}`);
  }
});

module.exports = router;
