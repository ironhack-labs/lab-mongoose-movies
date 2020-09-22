const express = require("express");
const router = express.Router();
const Movie = require("../models/movieModel");

router.get("/movies", async (req, res) => {
    try {
        const dbResult = await Movie.find();
        res.render("moviesPage", {movies : dbResult})
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;