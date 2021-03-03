const express = require("express");
const router = express.Router();
const movieModel = require("./../model/movie1")
const celebrityModel = require("./../model/celebrity")


router.get("/", (req, res, next) =>{
    movieModel.find().populate("celebrity")
    .then((movieList) => {
        res.render("movies/all-movies", { movie: movieList })
    })
    .catch((error) => {
        next(error);
    })
})

router.get("/new", (req, res, next) => {
    celebrityModel.find()
    .then((cast) => {
        res.render("movies/new-movie", {cast})
    })
    .catch((error) => {
        next(error);
    })
})

router.post("/new", (req, res, next) => {
    const { title, genre, plot, cast } = req.body;
    movieModel.create(req.body)
    .then(() => {
        res.redirect("/")
    })
    .catch((error) => {
        next(error);
      })
})

router.get("/:id", (req, res, next) => {
    movieModel.findById(req.params.id).populate("celebrity")
    .then((movie) => {
        res.render("movies/movie-details", { movie })
    })
    .catch((error) => {
        next(error);
    })
})

router.get("/:id/delete", (req, res, next) => {
    movieModel.findByIdAndDelete(req.params.id)
    .then(() => {
        res.redirect("/")
    })
    .catch((error) => {
        next(error);
    })
})

module.exports = router;