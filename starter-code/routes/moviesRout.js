const express = require("express");
const router = express.Router();
const movies = require("../models/movie");


router.get("/movies", (req, res, next) => {
  movies.find()
    .then(movies => {
      res.render("movies/index", { movies });
    })
    .catch(e => {
      console.log("Error on router get movies", e);
      next();
    });
});


router.get("/movies/new", (req, res, next) => {
  res.render("movies/new");
});


router.get("/movies/:id", (req, res, next) => {
  movies.findById(req.params.id).then(movies => {
    res.render("movies/show", { movies } );
  })
});


router.get("/movies/:id/delete", (req, res, next) => {
  movies.findByIdAndDelete(req.params.id)
    .then(() => res.redirect("/movies"))
    .catch(e => {
      console.log("Error deleting movies", e);
      next();
    });
});



router.get("/movies/:id/edit", (req, res, next) => {
  movies.findById(req.params.id)
    .then(movie => {
      res.render("movies/edit", { movie });
    })
    .catch(e => {
      console.log("Error editing movie", e);
      next();
    });
});


router.post("/movies", (req, res, next) => {
  const movie = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  };
  movies.create(movie)
    .then(() => res.redirect("/movies"))
    .catch(e => {
      console.log("Error creating movie", e);
      res.redirect("/movies/new")
    });
});


router.post("/movies/:id", (req, res, next) => {
  const movie = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  };
  movies.findByIdAndUpdate(req.params.id, movie)
    .then(() => res.redirect("/movies/"))
    .catch(e => console.log("Error updating movie", e));
});



module.exports = router;