const express = require(`express`);
const router = express.Router();

const Movie = require("../models/Movie");

router.get("/add", (req, res) => res.render("movie-add"));
router.post("/add", (req, res) => {
  const { title, genre, plot } = req.body;
  const newMovie = new Movie({ title, genre, plot });
  newMovie
    .save()
    .then(theMovie => res.redirect("/movies"))
    .catch(error => console.log(error));
});

router.get("/", (req, res, next) => {
  Movie.find()
    .then(allMovies => {
      res.render("movie-index", { movie: allMovies });
    })
    .catch(error => console.log(error));
});
router.get("/edit/:movie_id", (req, res) => {
  Movie.findById(req.params.movie_id)
    .then(editMovie => res.render("movie-edit", { edit: editMovie }))
    .catch(error => console.log(error));
});

router.post("/edit/:movie_id", (req, res) => {
  const { title, genre, plot } = req.body;
  Movie.update({ _id: req.params.movie_id }, { $set: { title, genre, plot } })
    .then(movi => res.redirect("/movies"))
    .catch(error => console.log(error));
});
router.post("/delete/:movie_id", (req, res, next) => {
  const id = req.params.movie_id;
  Movie.findByIdAndDelete(id)
    .then(deleteMovie => res.redirect("/movies"))
    .catch(error => console.log(error));
});

router.get("/:movie_id", (req, res) => {
  Movie.findById(req.params.movie_id)
    .then(theMovie => res.render("movie-detail", { mov: theMovie }))
    .catch(error => console.log(error));
});

module.exports = router;
