const express = require("express");

const router = express.Router();

const CelebrityModel = require("../models/Celebrity");
const MovieModel = require("../models/Movie.model");

/*All the movies*/

router.get("/", (req, res, next) => {
  MovieModel.find()
    .populate("cast")
    .then((dbRes) => {
      console.log(dbRes);
      res.render("movies/movies", { myMovies: dbRes, style: ["list.css"] });
    })
    .catch((err) => console.log(err));
});

/*Create one*/

router.get("/new", (req, res, next) => {
  CelebrityModel.find()
    .then((dbRes) => {
      res.render("movies/new-movies", {
        myCelebrities: dbRes,
        style: ["forms.css"],
      });
    })
    .catch((err) => next(err));
});

router.post("/create", (req, res, next) => {
  const newMovie = { ...req.body };
  MovieModel.create(newMovie)
    .then(() => {
      res.redirect("/movies");
    })
    .catch((err) => next(err));
});

/*Movie detail*/

router.get("/:id", (req, res, next) => {
  console.log(req.params.id);
  MovieModel.findById(req.params.id)
    .populate("cast")
    .then((dbRes) => {
      res.render("movies/movie-details", { movie: dbRes, style: ["list.css"] });
    })
    .catch((err) => next(err));
});

/*Deleting movies*/

router.post("/:id/delete", (req, res, next) => {
  MovieModel.findByIdAndRemove(req.params.id)
    .then(() => res.redirect("/"))
    .catch((err) => next(err));
});

module.exports = router;

/*Update movie*/

router.get("/:id/edit", (req, res, next) => {
  CelebrityModel.find().then((celeb) => {
    MovieModel.findById(req.params.id).then((movie) => {
      res.render("movies/edit-movie", {
        celeb,
        movie,
      });
    });
  });
});

router.post("/:id/edit", async (req, res, next) => {
  const { title, genre, plot, cast } = req.body;
  try {
    let movieEdit = await MovieModel.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/");
  } catch (err) {
    next(err);
  }
});
