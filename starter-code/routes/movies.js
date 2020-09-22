const express = require("express");
const router = express.Router();
const Movies = require("../models/Movie.model");

router.get("/", async (req, res, next) => {
  try {
    res.render("movies/index.hbs", {
      movies: await Movies.find(),
    });
  } catch (err) {
    next(err);
  }
});

router.get("/add-new-movie", (req, res) => {
  res.render("movies/create_form.hbs");
});

router.post("/add-new-movie", async (req, res, next) => {
  try {
    await Movies.create(req.body);
    res.redirect("/movies");
  } catch (databaseError) {
    next(databaseError);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const movie = await Movies.findById(req.params.id);
    res.render("movies/movie.hbs", { movie });
  } catch (err) {
    next(err);
  }
});

router.post("/:id/delete", async (req, res, next) => {
  try {
    await Movies.findByIdAndRemove(req.params.id);
    res.redirect("/movies");
  } catch (err) {
    next(err);
  }
});

router.get("/:id/edit", async (req, res) => {
    try {
        const movie = await Movies.findById(req.params.id);
        res.render("movies/edit_form.hbs", { movie });
      } catch (err) {
        next(err);
      }
  });


router.post("/:id/edit", async (req, res, next) => {
  try {
    await Movies.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/movies");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
