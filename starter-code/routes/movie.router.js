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
  res.render("movie/createMovie")
})

router.post("/movie/create", async (req, res, next) => {
  try {
    await MovieModel.create(req.body);
    console.log(req.body)
    res.redirect("/movies")
  } catch(err) {
    next(err)
  }
})

router.get("/movie/:id", async (req, res, next) => {
  const dbres = await MovieModel.findById(req.params.id);
  res.render("movie/detailMovie", { movie: dbres })
})

router.get("/movie/delete/:id", async (req, res, next) => {
  try {await MovieModel.findByIdAndRemove(req.params.id)
  res.redirect("/movies")
  } catch(err) {
    next(err)
  }
})


router.get("/movie/edit/:id", (req, res, next) => {

})

router.post("/movie/edit/:id", (req, res, next) => {

})


module.exports = router;