const express = require("express");
const router = express.Router();
const Movies = require("../models/movie");

/* GET movies index page */
router.get("/", (req, res, next) => {
  Movies.find()
    .then(movies => {
      res.render("movies/index", { movies });
    })
    .catch(error => {
      console.log(error);
    });
});

/* GET movie new page */
router.get("/new", (req, res, next) => {
  res.render("movies/new");
});

/* Get Edit Page*/
router.get("/:movie_id/edit", (req, res, next) => {
  Movies.findOne({ _id: req.params.movie_id })
    .then(movieDetailEdit => {
      res.render("movies/edit", movieDetailEdit);
    })
    .catch(error => {
      console.log(error);
    });
});

/* GET movies details page */
router.get("/:movie_id", (req, res, next) => {
  Movies.findOne({ _id: req.params.movie_id })
    .then(movieDetail => {
      res.render("movies/show", movieDetail);
    })
    .catch(error => {
      console.log(error);
    });
});

/*Create new Movie POST*/
router.post("/", (req, res, next) => {
  const { title, genre, plot } = req.body;
  const newMovie = new Movies({ title, genre, plot });
  newMovie
    .save()
    .then(movie => {
      res.redirect("movies/");
    })
    .catch(error => {});
});

/* Delete movie*/
router.post("/:movie_id/delete", (req, res, next) => {
  Movies.findByIdAndRemove({ _id: req.params.movie_id })
    .then(movie => {
      res.redirect("/movies");
    })
    .catch(error => {
      console.log(error);
    });
});

router.post("/:movie_id/edit", (req, res, next) => {
  const { title, genre, plot } = req.body;
  Movies.update({ _id: req.params.movie_id }, { $set: { title, genre, plot } })
    .then(movie => {
      res.redirect("/movies");
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
