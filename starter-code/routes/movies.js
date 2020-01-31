const express = require("express");
const router = express.Router();
const Movies = require("../models/movie");

// GET show all movies
router.get("/", async (req, res, next) => {
  try {
    const movies = await Movies.find();
    res.render("movies/index", { movies }); //esto es el que llama a la vista
    //capturas el error
  } catch (error) {
    console.log(`Error retrieving database ${error}`);
  }
  next();
});

//GET ADD NEW
router.get("/new", (req, res, next) => {
  res.render("movies/new");
});

//post add new
router.post("/new", async (req, res, next) => {
  try {
    const { title, genre, plot } = req.body;
    const obj = await Movies.create({ title, genre, plot });
    console.log(`Added new movie ${obj}`);
    return res.redirect("/movies");
  } catch (error) {
    console.log(` Error adding new movie A ${error}`);
    res.render("movies/new");
  }
});

//get show view details
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params; //request del parametro
    const movie = await Movies.findById(id);
    res.render("movies/show", { movie }); // response a la vista
  } catch (error) {
    console.log(` Error finding celebrity by id ${error}`);
  }
});

module.exports = router;
