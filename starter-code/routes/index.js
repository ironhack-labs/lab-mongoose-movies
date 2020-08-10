const express = require("express");
const router = express.Router();

const Movie = require("../model/movie");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

// ---------------------------------------------------------------------------------------//

// GET movies
router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((data) => {
      res.render("movies", { data });
      // res.send(data)
    })
    .catch((error) => console.log(error));
});

//GET movie infos
router.get("/movie/:id", (req, res, next) => {
  Movie.findById(req.params.id)
    .then((data) => {
      res.render("movie-details", { data });
      // res.send(data)
    })
    .catch((error) => console.log(error));
});

//GET new movie
router.get("/movie-new", (req, res, next) => {
  res.render("movie-new");
});

//POST new movie
router.post("/movie-new", (req, res, next) => {
  // res.send(req.body)
  Movie.create(req.body)
    .then((data) => {
      console.log("data added");
      res.redirect("/movies");
    })
    .catch((error) => console.log(error));
});

//GET delete movie
router.get("/movie-delete/:id", (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id)
    .then((response) => {
      console.log(`${response} deleted`);
      res.redirect("/movies");
    })
    .catch((error) => console.log(error));
});

//GET edit movie details
router.get("/movie-edit/:id", (req, res, next) => {
  Movie.findById(req.params.id)
    .then((response) => {
      res.render("movie-edit", { response });
    })
    .catch((error) => console.log(error));
});

//POST edit movie details
router.post("/movie-edit/:id", (req, res, next) => {
  // res.send(req.body)
  Movie.findByIdAndUpdate(req.params.id, req.body)
    .then((data) => {
      console.log("data edited");
      res.redirect("/movies");
    })
    .catch((error) => console.log(error));
});

module.exports = router;
