//#region Setup
const express = require("express");
const router = express.Router();
const Movie = require("../models/movie");
//#endregion

// #region overview
router.get("/", (req, res, next) => {
  Movie.find({})
    .then(movies => {
      console.log("MOVIES", movies);
      res.render("movies/index", { movies });
    })
    .catch(err => {
      next();
      return err;
    });
});
// #endregion

//#region details
router.get("/:id", (req, res, next) => {
  Movie.findById(req.params.id).then(movie => {
    res.render("movies/details", movie);
  });
});

module.exports = router;
