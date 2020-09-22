const express = require("express");
const router = express.Router();
const Movie = require("../models/movieModel");

router.get("/movies", async (req, res, next) => {
    try {
        const dbResult = await Movie.find();
        res.render("moviesViews/moviesPage", {movies : dbResult});
    } catch (error) {
        next(error);
    }
});

router.get("/movies/:id", async (req, res, next) => {
    try {
        const dbResult = await Movie.findById(req.params.id);
        res.render("moviesViews/moviedetails", {movie : dbResult});
    } catch (error) {
        next(error);
    }
});

router.get("/movies/new")

module.exports = router;