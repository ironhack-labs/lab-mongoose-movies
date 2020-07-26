const express = require("express");

const Movie = require("../models/movie.js");
const router = express.Router();

/* GET celebrities page */
router.get("/", (req, res, next) => {
  Movie.find()
    .then((allTheMoviesFromDB) => {
      console.log("DB:", allTheMoviesFromDB);
      res.render("movies/indexMovie", { movie: allTheMoviesFromDB });
    })
    .catch(next);
});

router.get("/new", (req, res, next) => {
    res.render("movies/new");
  });
  router.post("/new", (req, res, next) => {
    const { title, genre, plot } = req.body;
    console.log(req.body);
    const newMovie = new Movie({
      title,
      genre,
      plot,
    });
  /*   if (!newCelebrity) {
      console.log(newCelebrity);
      return res.redirect("/celebrities/new");
    } */
    newMovie
      .save()
      .then(() => {
        res.redirect("/movies");
      })
      .catch((error) => {
        console.log(error);
        res.redirect("/movies/new");
      });
  });
module.exports = router;
