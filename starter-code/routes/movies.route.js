const express = require('express');
const router  = express.Router();

const{
  getMovies,
  getOneMovie,
  renderNewForm,
  createMovie,
  deleteMovie,
  renderUpdateMovie,
  updateMovies
}=require("../controllers/movies.controllers")

router
.get("/",getMovies)
.post("/new",createMovie)
.get("/new",renderNewForm)
.get("/:movieId",getOneMovie)
.post("/:movieId/delete",deleteMovie)
.get("/:movieId/edit",renderUpdateMovie)
.post("/:movieId",updateMovies)


module.exports = router;
