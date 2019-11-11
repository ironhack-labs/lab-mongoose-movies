const express = require("express");
const router = new express.Router();

const movieModel = require("./../models/Movie");

router.get("/movies", (req, res) => {
  movieModel
    .find()
    .then(dbRes => {
      res.render("movies/index", {
        movies: dbRes
      });
    })
    .catch(err => console.log(err));
});

router.get("/movies/new", (req, res) => {
  movieModel
    .find()
    .then(dbRes => {
      res.render("movies/new");
    })
    .catch(err => console.log(err));
});

router.post("/movies/new", (req, res) => {
  const newMovie = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  };
  movieModel
    .create(newMovie)
    .then(dbRes => {
      res.redirect("/movies");
    })
    .catch(res.render("./../views/movies/new.hbs"));
});
router.post("/movies/:id/delete", (req, res) => {
  movieModel
    .findOneAndRemove({ _id: req.params.id })
    .then(res.redirect("/movies"))
    .catch(err => console.log(err));
});
router.get("/movies/:id", (req, res) => {
  movieModel
    .findOne({ _id: req.params.id })
    .then(dbRes => {
      console.log(dbRes);
      res.render("movies/show", {
        movie: dbRes
      });
    })
    .catch(err => console.log(err));
});

router.get("/movies/:id/edit", (req, res) => {
  movieModel
    .findOne({ _id: req.params.id })
    .then(dbRes => {
      res.render("./../views/movies/edit.hbs", { movie: dbRes });
    })
    .catch(err => console.log(err));
});
router.post("/movies/:id/edit", (req, res) => {
  const editMovie = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  };
  movieModel
    .findByIdAndUpdate(req.params.id, editMovie)
    .then(dbRes => {
      res.redirect("/movies");
    })
    .catch(err => {
      res.render("movies/edit");
    });
});
module.exports = router;
