const express = require("express");
const router = express.Router();
const movieModel = require("./../models/movie.js");

router.get("/index", (req, res) => {
  movieModel
    .find()
    .then(dbResults => {
      res.render("./movies/index", {
        movies: dbResults
      });
    })
    .catch(dbErr => {
      console.log("OH NO ! Database error", dbErr);
    });
});

router.get("/index/:id", (req, res) => {
  // console.log(req.params.id);
  movieModel
    .findById(req.params.id)
    .then(movie => {
      res.render("./movies/show", { movie });
    })
    .catch(dbErr => console.error("OH no, db err :", dbErr));
});

router.get("/movies", (req, res, next) => {
  res.render("index");
});

router.get("/new", (req, res) => {
  // console.log(req.params.id);
  res.render("./movies/new");
});

router.post("/", (req, res) => {
  const { title, genre, plot } = req.body;
  // if some tests must be performed, do so before database query
  movieModel
    .create({
      title,
      genre,
      plot
    })
    .then(dbRes => res.redirect("./movies/index"))
    .catch(dbErr => {
      res.redirect("./movies/new");
      console.log(dbErr);
      res.send("OH NO, an error occured while creating new movie !");
    });
});

router.post("/:id/delete", (req, res) => {
  movieModel
    .findByIdAndDelete(req.params.id)
    .then(dbRes => {
      res.redirect("/movies/index");
    })
    .catch(dbErr => {
      console.error(dbErr);
    });
});

module.exports = router;
