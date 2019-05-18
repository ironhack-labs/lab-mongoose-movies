const express = require("express");
const router = express.Router();

const Movie = require("../models/Movie");


router.get("/list", (req, res, next) => {
  Movie.find()
    .then(allmov => res.render("movie-list", { movie: allmov }))
    .catch(error => console.log(error));
});

router.get("/view/:movie_id", (req, res) => {
  Movie.findById(req.params.movie_id)
    .then(theMovie => res.render("movie-detail", { movie: theMovie }))
    .catch(error => console.log("buenos dias", error));
});

router.get("/add", (req, res) => res.render("movie-add"));
router.post("/add", (req, res) => {
  const { title, genre, plot } = req.body;
  const newMovie = new Movie({ title, genre, plot });
  newMovie
    .save()
    .then(theMovie => res.redirect("/movie/list"))
    .catch(error => console.log(error));
});

router.post("/delete/:movie_id", (req, res, next) => {
  const id = req.params.movie_id;
  Movie.findByIdAndDelete({ _id: id })
    .then(movie => res.redirect("/"))
    .catch(error => console.log(error));
});


router.get("/edit", (req, res) => {
  Movie.findOne({ _id: req.query.movie_id })
    .then(movie => res.render("movie-edit", { movie }))
    .catch(error => console.log(error));
});

router.post("/edit", (req, res) => {
  const { title, genre, plot } = req.body;
  Movie.update(
    { _id: req.query.movie_id },
    { $set: { title, genre, plot } }
  )
    .then(movie => res.redirect("/movie/list"))
    .catch(error => console.log(error));
});





module.exports = router;