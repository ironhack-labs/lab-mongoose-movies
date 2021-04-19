const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

router.get("/index", (req, res) => {
  Movie.find({})
    .then((movies) => {
      res.render("movies/index", { movies });
    })
    .catch((error) => console.error(error));
});

router.get("/index")


module.exports = router;