const express = require("express");
const router = express.Router();
const moviesModel = require("./../models/movy");

router.get("/movies", (req, res, next) => {
  moviesModel
    .find()
    .then(movies => {
      res.render("movies/index", {
        movies
      });
    })
    .catch(err => console.log(err));
});

router.get("/movies/:id", (req, res) => {
  console.log(req.params.id);
  moviesModel
    .findById(req.params.id)
    .then(movy =>
      res.render("show", {
        movy
      })
    )
    .catch(err => console.log(err));
});

router.get("/new-movies", (req, res) => {
  res.render("movies/new");
});

router.post("/new-movies", (req, res) => {
  console.log(req.body);

  moviesModel
    .create({
      title: req.body.title,
      genre: req.body.genre,
      plot: req.body.plot
    })
    .then(dbRes => res.redirect("/movies"))
    .catch(dbErr => console.log(dbErr));
});

router.post("/movies/:id/delete", (req, res) => {
  console.log(req.body);
  moviesModel
    .findByIdAndDelete(req.params.id)
    .then(dbRes => res.redirect("/movies"))
    .catch(dbErr => console.log(dbErr));
});

router.get("/movies/:id/edit", (req, res) => {
  moviesModel.findById(req.params.id).then(dbRes => {
    res.render("movies/edit", { movy: dbRes });
  });
});

router.post("/movies/:id/edit", (req, res) => {
  moviesModel
    .findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      genre: req.body.genre,
      plot: req.body.plot
    })
    .then(dbRes => res.redirect("/movies"))
    .catch(dbErr => console.log(dbErr));
});

module.exports = router;
