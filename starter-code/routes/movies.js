const express = require("express");
const router = express.Router();
const Movie = require("../models/movie");

/* GET movie page */
router.get("/movies", (req, res) => {
  Movie.find()
    .then(movie => {
      res.render("movies/index", { movie });
    })
    .catch(err => {
      console.log(err);
      res.render("movies/index");
    });
});

/*ADD a new movie */
router.get("/movies/new", (req, res) => {
  res.render("movies/new");
});

router.post("/movies/new", (req, res) => {
  const { title, genre, plot } = req.body;
  Movie.create({
    title,
    genre,
    plot
  })
    .then(movie => {
      res.redirect("/movies");
    })
    .catch(err => {
      res.redirect("movies/new");
    });
});

/* EDIT a movie */
router.get("/movies/:id/edit", (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movie => {
      res.render("movies/edit", { movie });
    })
    .catch(err => {
      next(err);
    });
});

router.post("/movies/:id", (req, res, next) => {
  const { title, genre, plot } = req.body;
  Movie.findById(req.params.id)
    .then(movie => {
      Movie.updateOne({
        title,
        genre,
        plot
      }).catch(err => {
        console.log("update movie not ok", err);
        next(err);
      });
    })
    .then(movie => {
      console.log("update movie ok", movie);
      res.redirect("/movies");
    });
});

/*GET movie details page */
router.get("/movies/:id", (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movie => {
      res.render("movies/show", { movie });
    })
    .catch(err => next(err));
});

/*DELETE a movie */
router.post("/movies/:id/delete", (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id)
    .then(movie => {
      console.log("movie successfully deleted", movie);
      res.redirect("/movies");
    })
    .catch(err => {
      console.log(err);
      next(err);
    });
});

module.exports = router;
