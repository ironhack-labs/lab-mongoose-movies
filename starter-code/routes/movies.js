const express = require("express");
const router = express.Router();
const Movies = require("../models/movies")


router.get("/movies", (req, res) => {
  Movies.find()
  .then(movie => {
    res.render ("movies/movies", {movie})
  })
})

router.get("/movies/:id", (req, res) => {
  let id = req.params.id
  Movies.findById(id)
  .then(movie => {
    res.render ("movies/movieDetail", {movie})
  })
})

router.get("/new-movie", (req, res) => {
    res.render ("movies/new-movie")
})
router.post("/new-movie", (req, res) => {
  let newMovie = req.body
  
  if ((newMovie.title) && (newMovie.genre) && (newMovie.plot)) {
  Movies.create({
    title: newMovie.title,
    genre: newMovie.genre,
    plot: newMovie.plot
  })
  res.redirect("/movies")
} else {
  res.render("movies/new-movie", {falseInput: true})
}
})


router.get("/movies/:id/delete", (req, res) => {
  let id = req.params.id
  Movies.findByIdAndDelete(id)
  .then (movie => {
  res.redirect ("/movies")
  })
})


router.get("/movies/:id/edit-movie", (req, res) => {
  let id = req.params.id;
  Movies.findById(id)
  .then ((movie => {
    res.render ("movies/edit-movie", {movie})
  }))
})


router.post("/movies/:id/edit-movie", (req, res) => {
let editMovie = req.body
let id = req.params.id

console.log (editMovie)
if ((editMovie.title) && (editMovie.genre) && (editMovie.plot)) {
Movies.findByIdAndUpdate(id, {
    title: editMovie.title,
    genre: editMovie.genre,
    plot: editMovie.plot
  })
.then((movie => {
  res.redirect("/movies")
}))
} else {
  Movies.findById(id)
  .then ((movie => {
    res.render("movies/edit-movie",
    {falseInput: true, movie: movie })
  }))
}
})


module.exports = router;