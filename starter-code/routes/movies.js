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
