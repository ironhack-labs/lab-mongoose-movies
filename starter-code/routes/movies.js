const express = require('express');
const router  = express.Router();
const {showMovies, getMovie, addMovie, newMovie, deleteMovie} = require("../controllers/controllers")

router.get("/", showMovies)

router.get("/new", addMovie)
router.post("/new", newMovie)


router.post("/:id/delete", deleteMovie)
router.get("/:id", getMovie)



module.exports = router