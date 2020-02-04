const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

router.get("/movies", (req, res, next) => {
  Movie.find({})
    .then(data => {
      //res.send(data);
      res.render("./movies/movies.hbs", { moviesList: data });
    })
    .catch(err => next(err));
});

router.get("/movies/new", (req, res, next) => {
  res.render("./movies/new.hbs");
});

router.get("/movies/:id/edit", (req, res, next) => {
  Movie.findById(req.params.id)
    .then(data => {
      res.render("./movies/edit.hbs", data);
    })
    .catch(err => {
      next(err);
    });
});

router.get("/movies/:id", (req, res, next) => {
  Movie.findById(req.params.id)
    .then(data => {
      //return res.send(data);
      res.render("./movies/show.hbs", data);
    })
    .catch(err => {
      next(err);
    });
});

router.post("/movies/add", (req, res, next) => {
  Movie.create({
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  })
    .then(created => {
      res.redirect("/movies");
    })
    .catch(err => {
      res.redirect("/movies/new");
    });
});

router.get("/movies/:id/delete", (req, res, next) => {
  Movie.findByIdAndRemove({ _id: req.params.id })
    .then(() => {
      res.redirect("/movies");
    })
    .catch(err => {
      next(err);
    });
});

router.post("/movies/:id/edit", (req, res, next) => {
  Movie.updateOne(
    { _id: req.params.id },
    {
      title: req.body.title,
      genre: req.body.genre,
      plot: req.body.plot
    }
  )
    .then(() => {
      res.redirect("/movies");
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
