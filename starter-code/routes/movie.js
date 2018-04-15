const express = require("express");
const Movie = require("../models/Movie");
const router = express.Router();

router.get("/", (req, res) => {
  Movie.find().then(movie => {
    res.render("movie/index", { movie });
  });
});

router.get("/new", (req, res) => {
  res.render("movie/new");
});
router.post("/new", (req, res) => {
  const { title, genre, plot} = req.body;
  const movie = new Movie({ title, genre, plot});
  movie.save().then(movie =>{
    res.redirect("/movie");
  })
});

router.get("/:id", (req, res) => {
  Movie.findById(req.params.id).then(movie => {
    res.render("movie/show", { movie });
  });
});
router.post("/:id/delete", (req, res) => {
  Movie.findByIdAndRemove(req.params.id).then(() => {
    res.redirect("/movie");
  })
})
router.get("/:id/edit", (req, res) => {
  Movie.findById(req.params.id).then(movie => {
    res.render("movie/edit",  movie );
  });
});
router.post("/:id/edit", (req, res) => {
  const {title, genre, plot} = req.body;
  const updateMovie = {title, genre, plot};
  Movie.findByIdAndUpdate(req.params.id, updateMovie).then(() => {
    res.redirect("/movie");
  });
});
module.exports = router;
