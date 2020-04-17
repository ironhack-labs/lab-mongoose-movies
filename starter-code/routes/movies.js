const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.js");

/* GET movies page */
router.get("/", (req, res, next) => {
  Movie.find()
    .then((dbResult) => {
      res.render("movies/index", { movies: dbResult, movie: true });
    })
    .catch((error) => {
      res.render("error", { error: error });
    });
});

router.get("/new", (req, res, next) => {
  res.render("movies/new", { movie: true });
});

router.get("/edit/:id", (req, res, next) => {
  Movie.findById(req.params.id).then((dbResult) => {
    res.render("movies/edit", { movie: dbResult }).catch((error) => {
      res.render("error", { error: error });
    });
  });
});

router.get("/:id", (req, res, next) => {
  Movie.findById(req.params.id)
    .then((dbResult) => {
      res.render("movies/show", { movie: dbResult });
    })
    .catch((error) => {
      res.render("error", { error: error });
    });
});

router.post("/", (req, res, next) => {
  Movie.create(req.body)
    .then((x) => {
      res.redirect("/movies");
    })
    .catch((err) => {
      res.render("error", { error: error });
    });
});

router.post("/delete/:id", (req, res, next) => {
  Movie.findByIdAndDelete(req.params.id)
    .then((dbResult) => {
      res.redirect("/movies");
    })
    .catch((error) => {
      res.render("error", { error: error });
    });
});

router.post("/edit/:id", (req, res, next) => {
  console.log(req.params.id);
  if (!req.body.title || !req.body.plot || !req.body.genre) {
    Movie.findById(req.params.id)
      .then((dbResult) => {
        res.render("movies/edit", {
          movie: dbResult,
          error: "Fill all fields",
        });
      })
      .catch((error) => {
        res.render("error", { error: error });
      });
  } else {
    Movie.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then((dbResult) => {
        res.redirect("/movies");
      })
      .catch((error) => {
        res.render("error", { error: error });
      });
  }
});

module.exports = router;
