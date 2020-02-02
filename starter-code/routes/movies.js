const express = require('express');
const router  = express.Router();
const movieModel = require('../models/celebrity')

router.get("/", (req, res) => {
  movieModel.find()
  .then(dbRes => {
    res.render("movies/index", { movies: dbRes });
  })
  .catch(err => console.log(err));
});


router.get("/new", (req, res) => {
  res.render("movies/new");
});

router.get("/:id", (req, res) => {
  movieModel
    .findById(req.params.id)
    .then(dbRes => {
      res.render("movies/show", { movies: dbRes });
    })
    .catch(err => console.log(err));
});

router.post("/new", (req, res) => {
  const { title, genre, plot } = req.body;
  // if some tests must be performed, do so before database query
  movieModel
    .create({
      title,
      genre,
      plot
    })
    .then(dbRes => res.redirect("/"))
    .catch(dbErr => {
      console.log(dbErr);
      res.redirect("/new")
    });
});

router.get("/", (req, res) => {
  movieModel
    .find() // retreive all the documents in the artists collection
    .then(dbResults => {
      res.render("list-movies", {
        movies: dbResults
      });
    })
    .catch(dbErr => {
      console.log("OH NO ! Database error", dbErr);
    });
});

router.get("/:id/delete", (req, res) => {
  movieModel
    .findByIdAndDelete(req.params.id)
    .then(dbRes => {
      res.redirect("/");
    })
    .catch(dbErr => {
      console.error(dbErr);
    });
});


module.exports = router;