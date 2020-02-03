 
const { Router } = require("express");
const {
  getAllMovies,
  createMovie,
  createMovieView,
  updateMovie,
  updateMovieView,
  deleteMovie,
  movieDetail
} = require("../controllers/movie");
const router = Router();

router
  .get('/', getAllMovies)
  .get("/createMovie", createMovieView)
  .post("/createMovie", createMovie)
  .get("/:movieId/updateMovie", updateMovieView)
  .post("/:movieId/updateMovie", updateMovie)
  .get("/:movieId/deleteMovie", deleteMovie)
  .get("/:movieId", movieDetail);
module.exports = router;