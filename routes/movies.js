const express = require('express');
const router  = express.Router();
const debug = require("../log")(__filename);

const Movie = require("../models/Movie");

/* GET home page */
router.get('/', (req, res, next) => {
  Movie.find().then( movies =>{
    //debug(movies)
    res.render('movies', {movies});
  })
});
/* CRUD -> Create show form */
router.get("/new", (req, res) => {
  res.render("movie_new");
});

/* CRUD -> Acquire form params and create the movie object in DB */
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

/* CRUD -> Udpate, show movie update form */
router.get("/:id/edit", (req, res) => {
  Movie.findById(req.params.id).then(movie => {
    res.render("movie_edit", { movie });
  });
});

/* CRUD -> Udpate, update the movie in DB */
router.post("/:id/edit", (req, res) => {
  const { title, genre, plot } = req.body;
  const updates = { title, genre, plot };
  Movie.findByIdAndUpdate(req.params.id, updates).then(() => {
    res.redirect("/movies");
  });
});
/* CRUD -> Delete the movie in DB */
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
