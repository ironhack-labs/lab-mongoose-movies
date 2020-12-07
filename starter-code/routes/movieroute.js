const express = require("express");
const router = express.Router();

const {
  getMovies,
  getMovie,
  createMovie,
  deleteMovie,
  updateMovie
} = require("../controllers/movies.controller");

/* GET home page */
router
  .get("/", getMovies)
  .get("/new", (req, res, next) => {
    res.render("movies/new");
  })
  .get("/:MovieId", getMovie)

  .post("/", createMovie)
  .post("/:MovieId/delete", deleteMovie)
  .post("/:MovieId/update", updateMovie);

module.exports = router;