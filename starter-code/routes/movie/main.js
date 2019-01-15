const express = require("express");
const router = express.Router();
const Movie = require("../../models/Movie");

//Iteration #2 listing our celebrities
router.get("/movies", (req, res) => {
  Movie.find()
    .then(movies => {
      res.render("movies/index", {
        movies
      });
    })
    .catch(err => {
      console.log(err);
    });
});

//Iteration #4 add celebrities
router.get("/movies/new", (req, res) => {
  let moviesId = req.params.id;
  Movie.findOne({ _id: moviesId })
    .then(movie => {
      res.render("movies/new", movie);
    })
    .catch(error => {
      console.log(error);
    });
});

router.get("/movies/:id", (req, res) => {
  let moviesId = req.params.id;
  Movie.findOne({ _id: moviesId })
    .then(movie => {
      res.render("movies/show", movie);
    })
    .catch(error => {
      console.log(error);
    });
});

//Insert a new Artists
router.post("/movies", (req, res) => {
  const { title, genre, plot } = req.body;
  const newMovie = new Movie({ title, genre, plot });
  newMovie.save();
  Movie.find()
    .then(movie => {
      res.redirect("/movie/main/movies/new");
    })
    .catch(err => {
      console.log(err);
    });
});

//Delete a record
router.post("/movies/delete", (req, res) => {
  let id = req.body.id;
  console.log(id);

  Movie.findByIdAndRemove(id)
    .then(movie => {
      res.redirect("/movie/main/movies");
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
