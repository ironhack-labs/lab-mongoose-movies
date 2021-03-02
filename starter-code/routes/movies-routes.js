const express = require("express");
const router = new express.Router();
const celebrity = require("../models/movie");

router.get("/movies/new", (req, res, next) => {
  res.render("new-movie");
});

router.post("/movies/create", (req, res, next) => {
  MovieModel.create(req.body)
    .then(() => {
      res.redirect("movies");
    })
    .catch(() => {
      res.redirect("new-movie");
    });
});

router.get("/movies", (req, res, next) => {
    MovieModel.find()
    .then(movie) => res.render("movies", {movie})
    .catch((error)=> console.log(error))
});

router.get("/:id", (req, res, next) => {
    MovieModel.findById(req.params.id)
    .populate("celebrities")
    .then((movie);
    res.render("movies/movie-details", {movie});
})
.catch(next)



module.exports=router;
