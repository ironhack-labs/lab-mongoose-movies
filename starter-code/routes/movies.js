const { Router } = require("express");
const router = Router();
const { getMovies, getMovie, newMovie, addMovie, deleteMovie, editMovie, saveMovie } = require("../controllers/movies")

router.get("/", getMovies).get("/new", newMovie).post("/", addMovie).post("/:id/delete", deleteMovie).get("/:id/edit", editMovie).get("/:id", getMovie).post("/:id", saveMovie);

module.exports = router;