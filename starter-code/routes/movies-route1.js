const express = require("express");
const router = express.Router();
const movieModel = require("./../model/movie1")
const celebrityModel = require("./../model/celebrity")


router.get("/", (req, res, next) =>{
    movieModel.find()
    .then((movieList) => {
        res.render("movies/all-movies", { movie: movieList })
    })
    .catch((error) => {
        next(error);
    })
})

router.get("/new", (req, res, next) => {
    celebrityModel.find()
    .then((celebrity) => {
        res.render("movies/new-movie", { celebrity })
    })
    .catch((error) => {
        next(error);
    })
})

router.post("/new", (req, res, next) =>{
    const { title, genre, plot, cast } = req.body
    movieModel.create(req.body)
    .then(() => {
        res.redirect("/movies")
    })
    .catch((error) => {
        next(error);
    })
    console.log(req.body)
})

router.get("/:id", (req, res, next) => {
    movieModel.findById(req.params.id).populate("cast")
    .then((movie) => {
        res.render("movies/movie-details", { movie });
    })
    .catch((error) => {
        next(error);
    })
})

router.get("/:id/update", (req, res, next) => {
    movieModel.findById(req.params.id).populate("cast")
    .then((movie) => {
        res.render("movies/edit-movie", { movie });
    })
    .catch((error) => {
        next(error);
    })
})

router.post("/:id/update", (req, res, next) => {
    const { title, genre, plot, cast } = req.body
    movieModel.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
        res.redirect("/movies")
    })
    .catch((error) => {
        next(error);
    })
})

router.get("/:id/delete", (req, res, next) => {
    movieModel.findByIdAndDelete(req.params.id)
    .then(() => {
        res.redirect("/movies")
    })
    .catch((error) => {
        next(error);
    })
})

module.exports = router;
