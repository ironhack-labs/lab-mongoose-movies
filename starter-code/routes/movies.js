const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie")


/* GET home page */
router.get('/', (req, res) => {
  res.render('index');
});

//FIND MOVIE
router.get("/movies", (req, res) => {
  Movie.find()
    .then((movies) => {
      console.log(movie)
      res.render("movies", { movies })
    })
    .catch((err) => {
      console.log("error while listing movies" + err)
    })
})

//FIND INDIVIDUAL MOVIE
router.get("/movies/:id", (req, res) => {
  Movie.findById(req.params.id)
    .then((movie) => {
      res.render("./movies/show", { movie })
    })
    .catch((err) => {
      console.log("error while listing individual movies" + err)
    })
})
//CREATE NEW MOVIE
router.get("/movies/new", (req, res) => {
  res.render("movies/new")
})

router.post("/movies", (req, res) => {
  const { title, genre, plot } = req.body;
  const newMovie = new Celebrity({ title, genre, plot })
  newMovie.save()
    .then(() => {
      res.redirect("/movies")
    })
    .catch((err) => {
      console.log("Error while creating new movie" + err)
    })
})
//DELETE MOVIES

router.post("/movies/:id/delete", (req, res) => {
  Movie.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect("/movies")
    })
    .catch((err) => {
      console.log("error while deleting movie" + err)
    })
})

//UPDATES MOVIES
router.get("/movies/:id/edit", (req, res) => {
  Movie.findById(req.params.id)
    .then((movie) => {
      res.render("/movie/edit", { movie })
    })
    .catch((err) => {
      console.log("error while editing movie" + err)
    })
})

router.post("/movies/:id", (req, res) => {
  const { title, genre, plot } = req.body
  Movie.update(
    { _id: req.params.id },
    { $set: { title, genre, plot } },
    { new: true }
  )
    .then(() => {
      res.redirect("/movies")
    })
    .catch((err) => {
      console.log("error while updating movie" + err)
    })
})
module.exports = router;

