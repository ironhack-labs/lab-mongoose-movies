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
