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
