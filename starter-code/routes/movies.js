const express = require("express");
const router = express.Router();
const Movies = require("../models/Movie.model");


router.get("/", async (req, res, next) => {
    try {
      res.render("movies.hbs", {
        movies: await Movies.find(),
      });
    } catch (err) {
      next(err);
    }
  });

module.exports = router;


