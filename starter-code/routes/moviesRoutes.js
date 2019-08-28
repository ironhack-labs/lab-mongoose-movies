const express = require("express");
const router = express.Router();

const {
  findMovies,
  newGetMovie,
  newPostMovie,
  findMovie,
  deleteMovie,
  editMovie,
  updateMovie
} = require("../controllers/movieController");

router.get("/movies", findMovies);

router.get("/movies/new", newGetMovie);

router.post("/movies", newPostMovie);

router.get("/movies/:id", findMovie);

router.post("/movies/:id/delete", deleteMovie);

router.get("/movies/:id/edit", editMovie);

router.post("/movies/:id", updateMovie);

module.exports = router;
