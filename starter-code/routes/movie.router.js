const express = require("express");
const router = express.Router();
const MovieModel = require("../models/Movie.model")

router.get("/movies", async (req, res, next) => {
  try {
    const dbres = await MovieModel.find();
    res.render("movie/allMovies", { movies: dbres })
  } catch(err) {
    next(err)
  }
});


router.get("/movie/create", (req, res, next) => {

})

router.post("/movie/create", (req, res, next) => {

})


router.get("/movie/edit/:id", (req, res, next) => {

})

router.post("/movie/edit/:id", (req, res, next) => {

})

router.get("/movie/delete/:id", (req, res, next) => {

})

module.exports = router;