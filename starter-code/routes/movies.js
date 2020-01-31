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

// post delete movies

router.post("/:id/delete", async (req, res, next) => {
  try {
    console.log("delete");
    const { id } = req.params;
    const movie = await Movies.findByIdAndRemove(id);
    console.log(` Movie deleted ${movie}`);
    return res.redirect("/movies");
  } catch (error) {
    console.log(` Error deleting movie by id ${error}`);
  }
});

// post update movies
router.post("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, genre, plot } = req.body;
    const movies = await Movies.findByIdAndUpdate(id, {
      title,
      genre,
      plot
    });
    console.log(` movies updated ${movies} `);
    return res.redirect("/movies");
  } catch (error) {
    console.log(` Error updating movies by id in database  ${error}`);
  }
});
//get edit
router.get("/:id/edit", async (req, res, next) => {
  try {
    const { id } = req.params;
    const movies = await Movies.findById(id);
    res.render("movies/edit", { movies });
  } catch (error) {
    console.log(` Error editing movies by id ${error}`);
  }
  next();
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
