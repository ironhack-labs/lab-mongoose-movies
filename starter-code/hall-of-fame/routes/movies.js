require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const Movie = require("../models/Movies");
const router = express.Router();

dbURL = process.env.DBURL;

/* GET movies list */
router.get("/index", (req, res, next) => {

  Movie.find()
    .then(movie => {
      res.render("movies/index", { movie });
    })
    .catch(err => {
      console.log(err);
    });
});

/* Add new movie */
router.get("/new", (req, res, next) => {
  res.render("movies/new");
});

router.post("/new", (req, res, next) => {
  const { title, genre, plot } = req.body;

  const movie = new Movie({ title, genre, plot });

  movie
    .save()
    .then(movie => {
      res.redirect("/movies/index");
    })
    .catch(err => {
      res.render("error", err);
    });
});

/* Show movie details */
router.get("/:id", (req, res, next) => {
  Movie.findById(req.params.id).then(movie => {
    res.render("movies/show", { movie });
  });
});

/* Delete movie */
router.post("/:id/delete", (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect("/movies/index");
    })
    .catch(err => {
      res.render("error", err);
    });
});

router.get("/:id/edit", (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movie => {
      res.render("movies/edit", { movie });
    })
    .catch(err => {
      res.render("error", err);
    });
});

router.post("/:id/edit", (req, res, next) => {
  const { title, genre, plot } = req.body;
  const updates = { title, genre, plot };

  console.log(req.body);
  Movie.findByIdAndUpdate(req.params.id, updates)
    .then(() => {
      res.redirect("/movies/index");
    })
    .catch(err => {
      res.render("error", err);
    });
});

module.exports = router;
