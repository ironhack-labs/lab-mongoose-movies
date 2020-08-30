const express = require('express');
const router  = express.Router();

const {callMovies,
        moviesDetails,
        createMovie,
        updateMovie,
        deleteMovie,
        formMovie,
        formUpdateMovie } = require("../controllers/movies");


// C

router.get("/new", formMovie)
router.post("/new", createMovie)

//R
router.get("/", callMovies)
router.get("/:movieID", moviesDetails)

//U

router.get("/update/:movieID", formUpdateMovie)
router.post("/update/:movieID", updateMovie)

//D

router.get("/delete/:movieID", deleteMovie)

module.exports = router