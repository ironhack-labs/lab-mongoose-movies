const express = require("express")
const moviesRouter = express.Router()

const Movies = require("./../models/movie")

moviesRouter.get("/", (req, res) => {
    Movies.find({})
      .then((movies) => res.render("movies/index", { movies }))
      .catch((error) => console.log(error));
  });

module.exports = moviesRouter