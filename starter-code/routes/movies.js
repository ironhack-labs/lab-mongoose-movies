const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");


//show all db movies
router.get("/", async (req, res, next) => {
  try {
    const movies = await Movie.find();
    res.render("movies/index", { movies });
  } catch (err) {
    console.error(err);
    next();
  }
});

//get for a new movie
router.get("/new", async (req, res, next) => {
  return res.render("movies/new");
});

//create a new movie
router.post("/", async (req, res, next) => {
  try {
    const { title, genre, plot } = req.body;
    const obj = await Movie.create({ title, genre, plot });
    console.log(`Add new movie in db ${obj}`);
    res.redirect("/movies");
  }catch (err) {
    console.log(err);
    res.render("movies/new");
  }
});

//show details of a movie
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const details = await Movie.findById(id);
    console.log(details);
    res.render("movies/show", { details });
  } catch (err) {
    console.error(err);
    next();
  }
});





module.exports = router;
