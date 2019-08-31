const Movie = require("../models/movie.js");
const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  Movie.find()
    .then(movies => {
      res.render("movies/index", { movies });
    })
    .catch(dbErr => {
      console.log("there was an error in our database", dbErr);
      next();
    });
});

router.get("/new", (req, res, next) => {
  res.render("movies/new.hbs");
});

router.post("/:id", (req, res, next) => {
  const { title, genre, plot } = req.body;
  Movie.findByIdAndUpdate(req.params.id, { title, genre, plot })
    .then(dbRes => {
      console.log(dbRes, "was edited");
      res.redirect("/movies");
    })
    .catch(dbErr => {
      console.log(dbErr, "gave an error");
      next();
    });
});

router.post("/:id/delete", (req, res, next) => {
  req.params.id;
  Movie.findByIdAndRemove(req.params.id)
    .then(movieDel => {
      console.log(movieDel);
      res.redirect("/movies");
    })
    .catch(dbErr => {
      console.log("there was an error", dbErr);
      next();
    });
});

router.get("/:id/edit", (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movieUpd => {
      console.log("movie to update", movieUpd);
      res.render("movies/edit.hbs", { movieUpd });
    })
    .catch(dbErr => {
      console.log("could not be updated", dbErr);
    });
});

router.get("/:id", (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movie => {
      res.render("movies/show.hbs", { movie });
    })
    .catch(dbErr => {
      console.log("there was an error to show info", dbErr);
    });
});

router.post("/", (req, res, next) => {
  const { title, genre, plot } = req.body;
  const movie = new Movie({ title, genre, plot });
  movie
    .save()
    .then(movieAdd => {
      console.log(movieAdd);
      res.redirect("/movies");
    })
    .catch(dbErr => {
      console.log("the movie could not be added", dbErr);
      res.render("movies/new");
    });
});

module.exports = router;
