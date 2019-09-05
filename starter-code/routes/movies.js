const express = require("express");
const router = express.Router();
const MovieModel = require("./../models/movie");

/* GET movies */
router.get("/", (req, res, next) => {
  MovieModel.find()
    .then(dbResValue => {
      console.log(dbResValue);
      res.render("movies/index", { movies: dbResValue });
    })
    .catch(dbErr => {
      next(dbErr);
    });
});

router.get("/new", (req, res, next) => {
  MovieModel.findOne({ _id: req.params.id })
    .then(dbResValue => {
      res.render("movies/new", { movies: dbResValue });
    })
    .catch(dbErr => {
      next(dbErr);
    });
});

router.post("/new", (req, res, next) => {
  MovieModel.create({
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  })
    .then(dbResValue => {
      res.redirect("/movies");
    })
    .catch(dbErr => {
      next(dbErr);
    });
});

router.get("/:id", (req, res, next) => {
  MovieModel.findOne({ _id: req.params.id })
    .then(dbResValue => {
      console.log(dbResValue);
      res.render("movies/show", { movie: dbResValue });
    })
    .catch(dbErr => {
      next(dbErr);
    });
});

router.post("/:id/delete", (req, res, next) => {
  console.log(req.params._id);
  MovieModel.findByIdAndRemove({ _id: req.params.id })
    .then(dbResValue => {
      console.log("delete ok", dbResValue);
      res.redirect("/movies");
    })
    .catch(dbErr => {
      next(dbErr);
    });
});

module.exports = router;
