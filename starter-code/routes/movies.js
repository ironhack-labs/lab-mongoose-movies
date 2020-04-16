const express = require("express");
const router = express.Router();

const Movie = require("../models/movie");
const Celeb = require("../models/celebrity");

// show all movies

router.get("/", (req, res, next) => {
  Movie.find()
    .then((mvs) => {
      let obj = { allMovies: mvs };
      console.log(obj);

      res.render("movies/show-movies", obj);
    })
    .catch((error) =>
      console.log("An error happened while showing movies:", error)
    );
});

// show one movie

router.get("/:identifier", (req, res, next) => {
  Movie.findOne({ _id: req.params.identifier }).populate("cast")
    .then((mv) => {
      console.log("One movie is " + mv);

      res.render("movies/movie-details", mv);
    })
    .catch((error) =>
      console.log("An error happened while showing movie detail:", error)
    );
});

// delete one movie

router.post("/delete/:identifier", (req, res, next) => {
  Movie.findByIdAndRemove(req.params.identifier)
    .then(() => {
      res.redirect("/movies");
    })
    .catch((error) => {
      return error;
    });
});

// update movie

router.get("/edit/:identifier", (req, res, next) => {
  Movie.findById(req.params.identifier)
    .then((mov) => {
      Celeb.find().then((celebs) => {
      res.render("movies/edit", { myMov: mov, allCelebs: celebs});
    });
  });
    // .catch((error) => {
    //   return error;
    // });
});

router.post("/:identifier", (req, res, next) => {
  Movie.findByIdAndUpdate(req.params.identifier, {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot,
    cast: req.body.cast,
  })
    .then(() => {
      res.redirect("/movies");
    })
    .catch((error) => {
      return error;
    });
});

module.exports = router;
