const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then(movie => {
      res.render("movies/index", { movieList: movie });
    })
    .catch(err => {
      console.log(err);
      next();
    });
});

router.get("/movies/new", (req, res, next) => {
  res.render("movies/new");
});

router.get("/movies/:id/edit", (req, res, next) => {
  const id = req.params.id;
  // const { name, occupation, catchphrase} =
  Movie.findById(id)
    .then(movie => {
      res.render(`movies/edit`, { movie });
    })
    .catch(err => {
      console.log(err);
      next();
    });
});

router.get("/movies/:movieId", (req, res, next) => {
  const movieId = req.params.movieId;
  console.log(req.params);
  Movie.findById(movieId)
    .then(movie => {
      // console.log(movie);
      res.render("movies/show", { movie });
    })
    .catch(err => {
      console.log(err);
      next();
    });
});

router.post("/movies/:id/edit", (req, res, next) => {
  const id = req.params.id;
  const { title, genre, plot } = req.body;
  Movie.findByIdAndUpdate(id, { title, genre, plot })
    .then(() => {
      res.redirect("/movies");
    })
    .catch(err => {
      console.log(err);
      next();
    });
});

router.post("/movies", (req, res, next) => {
  const { title, genre, plot } = req.body;
  Movie.create({ title, genre, plot })
    .then(() => {
      console.log(
        `Success! ${title} was added to the database. Begone peasant.`
      );
      res.redirect(`/movies`);
    })
    .catch(err => {
      console.log(err);
      next();
    });
});

router.post("/movies/:id/delete", (req, res, next) => {
  const id = req.params.id;
  Movie.findByIdAndRemove(id)
    .then(() => {
      console.log(
        "Success. Your most hated Movie was deleted for all eternity. Muahahahahahah"
      );
      res.redirect("/movies");
    })
    .catch(err => {
      console.log(err);
      next();
    });
});

module.exports = router;
