const bodyParser = require("body-parser");
const express = require("express");
const app = require("../app");
const Movies = require("../models/Movies.model");
const router = express.Router();

router.get("/", (req, res, next) => {
  Movies.find({})
    .then((allMovies) => {
      // res.send(allMovies)
      res.render("./movies/index", allMovies);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/new", (req, res, next) => {
  res.render("./movies/new");
});

router.post("/", (req, res) => {
  let newMovie = new Movies({
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot,
  });
  newMovie
    .save()
    .then((result) => {
      res.redirect("./movies/");
    })
    .catch((err) => {
      console.log(err);
      res.render("./movies/new");
    });
});

router.post("/:id/delete", (req, res) => {
  Movies.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect("/movies/");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/:id", (req, res, next) => {
  Movies.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot,
  })
    .then((result) => {
      res.redirect("/movies/");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/:id/edit", (req, res, next) => {
  Movies.findById(req.params.id).then((edit) => {
    res.render("./movies/edit", edit);
  });
});

router.get("/:id", (req, res, next) => {
  Movies.findById(req.params.id)
    .then((result) => {
      res.render("./movies/show", result);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
