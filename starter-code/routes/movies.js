const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

const MovieModel = require("../models/movie.model");

// Movies List.
router.get("/movies/index", (req, res, next) => {
  MovieModel.find()
    .then((movies) => {
      res.render("movies/index.hbs", { movies });
    })
    .catch((err) => {
      console.log("error in home page creation", err);
    });
});

// Adding a new movie.
router.get("/movies/new", (req, res, next) => {
  res.render("movies/new.hbs");
});

router.post("/movies", (req, res, next) => {
  MovieModel.create(req.body)
    .then(() => {
      res.redirect("movies/index");
    })
    .catch((err) => {
      console.log("error in custom creation", err);
      res.redirect("/movies/new");
    });
});

// Deleting.
router.post("/movies/:id/delete", (req, res, next) => {
  const id = req.params.id;
  MovieModel.findByIdAndDelete(id)
    .then(() => {
      console.log("All gucci.");
      res.redirect("/movies/index");
    })
    .catch((err) => {
      console.log(
        "Something has gone horribly wrong in the delete function.",
        err
      );
    });
});

// Editing.
router.get("/movies/:id/edit", (req, res, next) => {
  const id = req.params.id;
  MovieModel.findById(id)
    .then((movie) => {
      res.render("movies/edit.hbs", { movie });
    })
    .catch((err) => {
      console.log("Something has gone horribly wrong in get /edit.", err);
      res.redirect("/movies/create");
    });
});

router.post("/movies/:id/edit", (req, res, next) => {
  const id = req.params.id;
  MovieModel.findByIdAndUpdate(id, { $set: req.body })
    .then(() => {
      console.log("Data was updated successfully.");
      res.redirect("/movies/index");
    })
    .catch((err) => {
      console.log("Something has gone horribly wrong in editing.", err);
      res.redirect("/movies/index");
    });
});

// Movie details.
router.get("/movies/:id", (req, res, next) => {
  const id = req.params.id;
  MovieModel.findById(id)
    .then((movie) => {
      res.render("movies/show.hbs", { movie });
    })
    .catch((err) => {
      console.log("error in custom creation", err);
    });
});

module.exports = router;
