const express = require("express");
const router = express.Router();
const movies = require("../models/Movie");

router.get("/movies", (req, res, next) => {
  movies
    .find()
    .then(mov => {
      res.render("movie/index", { mov });
    })
    .catch(e => {
      console.log("Error", e);
      next();
    });
});

router.get("/movies/new", (req, res, next) => {
  res.render("movie/new");
});

router.get("/movies/:id", (req, res, next) => {
  movies.findById(req.params.id).then(mov => {
    res.render("movie/show", { mov });
  });
});

router.get("/movies/:id/delete", (req, res, next) => {
  movies
    .findByIdAndDelete(req.params.id)
    .then(() => res.redirect("/movies"))
    .catch(e => console.log("ERROR", e));
});

router.get("/movies/:id/edit", (req, res, next) => {
  movies
    .findById(req.params.id)
    .then(mov => {
      res.render("movie/edit", { mov });
    })
    .catch(e => console.log("ERROR", e));
});

router.post("/movies", (req, res, next) => {
  const movie = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  };
  movies
    .create(movie)
    .then(() => res.redirect("/movies"))
    .catch(e => console.log("ERROR", e));
});

router.post("/movies/:id", (req, res, next) => {
    const movie = {
        title: req.body.title,
        genre: req.body.genre,
        plot: req.body.plot
      };
  movies
    .findByIdAndUpdate(req.params.id, movie)
    .then(() => res.redirect("/movies/"+req.params.id))
    .catch(e => console.log("ERROR", e));
});

module.exports = router;
