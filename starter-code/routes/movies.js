const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

router.get("/movies", (req, res) => {
  Movie.find()
    .then(movies => res.render("movies", { movies }))
    .catch(err => console.log(err));
});

// GET Create element CRUD
router.get("/movies/new", (req, res) => {
  res.render("movies/new");
});

// // POST Create Movie
router.post("/movies", (req, res) => {
  const { title, genre, plot } = req.body;
  const movie = new Movie({ title, genre, plot });
  movie.save()
    .then(() => res.redirect("/movies"))
    .catch(err => console.log(err));
});

//GET Edit movie
router.get("/movies/:id/edit", (req, res) => {
  Movie.findById(req.params.id)
  .then(movie => res.render("movies/edit", movie))
  .catch(err => console.log(err)) 
})

// POST Edit movie
router.post("/movies/:id", (req, res) => {
  const { title, genre, plot  } = req.body;
  const update = { title, genre, plot };
  Movie.findByIdAndUpdate(req.params.id, update)
  .then(movie => 
    {console.log("modificacion exitosa");
    res.render("movies/movie_details", movie)})
})

// GET Show one movie
router.get("/movies/:id", (req, res) => {
  Movie.findById(req.params.id)
    .then(movie =>{ 
      res.render("movies/movie_details", movie)})
    .catch(err => console.log(err));
});

// POST DELETE CELEBRITY
router.post("/movies/:id/delete", (req, res) => {
  Movie.findByIdAndRemove(req.params.id)
  .then(() => res.redirect("/movies"))
  .catch(err => console.log(err))
})


module.exports = router;
