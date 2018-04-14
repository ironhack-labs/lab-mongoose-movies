const express = require("express");
const router = express.Router();

const Movie = require("../models/movie");

/* CRUD -> Retrieve ALL */
router.get("/", (req, res) => {
    Movie.find().then(movies => {
      console.log(movies)
      res.render("movie_list", { movies });
    })
    .catch(error => {
      console.log(error)
    }) 
  });
  module.exports = router;