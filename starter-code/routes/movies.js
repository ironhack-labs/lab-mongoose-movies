const express = require("express");
const router = express.Router();
const Movies = require("../models/Movies");
const hbs = require("hbs");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

router.get("/movies", (req, res, next) => {
  console.log("efgefgefefefefrfrfrfrfrfrfrfr")

  Movies.find()
    .then(allMovies => {
      console.log(allMovies)
      res.render("./movies/index", { allMovies });
    })
    .catch(error => {
      next(error);
    });
});

router.get("/showmovie/:movieId", (req, res, next) => {
  Movies.findById(req.params.movieId)
    .then(movie => {
      console.log(movie)
      res.render("./movies/showmovie", { movie });
    })
    .catch(error => {
      console.log("Error", error);
      next(error);
    });
});

router.get("/movies/new", (req, res, next) => {
  if (req.query.error) {
    res.render("./movies/new", {
      error: "Invalid movie"
    });
  }
  res.render("./movies/new");
});

router.post("/movies/new", (req, res, next) => {
  if (movieValidator(req.body)) {
    Movies.create({
      title: req.body.title,
      genre: req.body.genre,
      plot: req.body.plot
    }).then(newMovie => {
      res.redirect("/movies");
    });
  } else {
    res.redirect("/movies/new?error=invalid-movie");
  }
});

router.post("/movies/:id/delete", (req, res, next) => {
  Movies.findByIdAndRemove(req.params.id)
  .then(deleted => {
    res.redirect("/movies");
  })
  .catch(error=> next(error));
})

function movieValidator(req) {
  const regTitle = /(?=.*[a-z])(?=.{2,})/;
  const regGenre = /(?=.*[a-z])(?=.{3,})/;
  const regPlot = /(?=.*[a-z])(?=.{6,})/;
  const { title, genre, plot } = req;
  return (
    regTitle.test(title) &&
    regGenre.test(genre) &&
    regPlot.test(plot)
  );
}

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Error! cannot retrieve data");
});
module.exports = router;
