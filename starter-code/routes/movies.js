const express = require('express');
const router = express.Router();
const MovieModel = require("../models/movie.model");

router.get("/movies", (req, res, next) => {
  MovieModel.find()
    .then((data) => {
      console.log("data retrieved");
      res.render("movies/index.hbs", { data });
    })
    .catch((err) => {
      console.log(err);
      next();
    });
});

router.get("/movies/:id", (req, res, next) => {
  MovieModel.findById(req.params.id)
    .then((data) => {
      res.render("movies/show", { data });
    })
    .catch((err) => {
      console.log(err);
      next();
    });
});

router.get("/movies/new", (req, res, next) => {
  res.render("movies/new");
});

router.post("/movies", (req, res, next) => {
  MovieModel.create(req.body)
    .then(() => {
      res.redirect("/movies");
    })
    .catch(() => {
      res.render("movies/new");
    });
});

router.post("/movies/:id/delete", (req, res, next) => {
  MovieModel.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect("/movies");
    })
    .catch((err) => {
      console.log(err);
      next();
    });
});

router.get("/movies/:id/edit", (req, res, next) => {
  MovieModel.findById(req.params.id)
    .then((data) => {
      res.render("movies/edit.hbs", { data });
    })
    .catch((err) => {
      console.log(err);
      next();
    });
});

router.post("/movies/:id", (req, res, next) => {
  MovieModel.findByIdAndUpdate(req.params.id, {$set: req.body})
  .then(() => {
    res.redirect("/movies");
  })
  .catch((err) => {
    console.log(err);
    next();
  });
});


module.exports = router;