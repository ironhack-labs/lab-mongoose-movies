const express = require('express');
const router  = express.Router();
const debug = require("../log")(__filename);

const Movie = require("../models/Movie");


router.get('/', (req, res, next) => {
  Movie.find().then( movies =>{
    
    res.render('movies', {movies});
  })
});

router.get("/new", (req, res) => {
  res.render("movie_new");
});


router.post("/new", (req, res) => {
  const { title, genre, plot } = req.body;

  const movie = new Movie({ title, genre, plot });
  movie.save().then(movie => {
    debug("La filme");
    debug(movie);
    res.redirect("/movies");
  });
});

router.get("/:id", (req, res, next) => {

  Movie.findById(req.params.id)
  .then(movie_detail => {
    debug(movie_detail)
    res.render("movies_detail", { movie_detail});
  });
});


router.get("/:id/edit", (req, res) => {
  Movie.findById(req.params.id).then(movie => {
    res.render("movie_edit", { movie });
  });
});


router.post("/:id/edit", (req, res) => {
  const { title, genre, plot } = req.body;
  const updates = { title, genre, plot };
  Movie.findByIdAndUpdate(req.params.id, updates).then(() => {
    res.redirect("/movies");
  });
});

router.post("/:id/delete", (req, res) => {
  Movie.findByIdAndRemove(req.params.id).then(() => {
    debug("deleted");
    res.redirect("/movies");;
  })
  .catch((err)=>{
    debug(err);
  });
});

module.exports = router;