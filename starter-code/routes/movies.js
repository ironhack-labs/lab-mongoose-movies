const express = require("express");
const router = express.Router();

const Movie = require("../models/Movie");

router.get("/", (req, res, next) => {
  Movie.find()
    .then((moviesFromDB) => {
      console.log(`list of movies`, moviesFromDB);
      res.render("movies/index", { movies: moviesFromDB });
    })
    .catch((err) => {
      console.log(`Error while retrieving movies: ${err}`);
      next();
    });
});

router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  Movie.findById(id)
    .then((moviesDetails) => {
      console.log(moviesDetails);
      res.render("movies/show", { details: moviesDetails });
    })
    .catch((err) => {
      console.log(`Error while retrieving movies: ${err}`);
      next();
    });
});

//create
router.get("/new", (req, res, next) => res.render("movies/new"));

router.post("/new", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Movie.findOne({ name }) //do not create one if already exist
    .then((movieDocFromDB) => {
      if (!movieDocFromDB) {
        Movie.create({ name, occupation, catchPhrase }).then(() =>
          res.redirect("/movies")
        );
      } else {
        res.render("movies/new", {
          message: "It seems you are already have movie with the same name",
        });
        return;
      }
    })
    .catch((err) => console.log(`Error while creating a new movie: ${err}`));
});

//delete
router.post("/:id/delete", (req, res, next) => {
  const { id } = req.params;
  Movie.findByIdAndDelete(id)
    .then(() => res.redirect(`/movies`))
    .catch((error) => {
      console.log(`Error while deleting the selected movie: ${error}`);
      next();
    });
});

//edit
router.get("/:id/edit", (req, res, next) => {
  const { id } = req.params;
  Movie.findById(id)
    .then((movieToEdit) => {
      res.render("movies/edit", movieToEdit);
    })
    .catch((error) => console.log(`Error while editing movie: ${error}`));
});

router.post("/:id/edit", (req, res, next) => {
  const { id } = req.params;
  const { name, occupation, catchPhrase } = req.body;

  Movie.findByIdAndUpdate(id, { name, occupation, catchPhrase }, { new: true })
    .then((updatedmovie) => res.redirect(`/movies`))
    .catch((error) => `Error while updating movie: ${error}`);
});

module.exports = router;
