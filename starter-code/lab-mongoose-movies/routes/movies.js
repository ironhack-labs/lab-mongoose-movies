const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

router.get("/", (req, res, next) => {
  Movie.find()
    .then(movies => {
      res.render("./movies/index", { movies });
    })
    .catch(err => {
      next();
    });
});

router.get("/new", (req, res, next) => {
  res.render("./movies/new");
});

router.post("/", (req, res, next) => {
  const { title, genre, plot } = req.body;
  const movie = new Movie({ title, genre, plot });
  movie
    .save()
    .then(movie => {
      res.redirect("/movies");
    })

    .catch(err => {
      next();
    });
});

router.get("/:id", (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movies => {
      res.render("./movies/show", { movies });
    })
    .catch(err => {
      next();
    });
});

router.get("/:id/edit", (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movies => {
      res.render("./movies/edit", { movies});
    })

    .catch(err => {
      next();
    });
});

router.post("/:id/edit", (req, res, next) => {
  const { title, genre, plot } = req.body;
  const updates = {title, genre, plot };
  Movie.findByIdAndUpdate(req.params.id, updates).then(() => {
    res.redirect("/movies");
  })
  .catch(err => {
    next();
  });
});

router.post("/:id/delete", (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect("/movies");
    })
    .catch(err => {
      next();
    });
});

module.exports = router;
