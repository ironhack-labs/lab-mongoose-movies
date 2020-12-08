const express = require("express");
const router = new express.Router();
const MovieModel = require("./../models/Movie");

// get the /movies page
router.get("/", async (req, res, next) => {
  try {
    res.render("./../views/movies/index.hbs", {
      movies: await MovieModel.find(),
    });
  } catch (err) {
    next(err);
  }
});

// create a new celebrity (get and post form)
router.get("/new", async (req, res, next) => {
  try {
    res.render("./../views/movies/new.hbs");
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    await MovieModel.create(req.body);
    res.redirect("/movies");
  } catch (err) {
    res.render("./../views/movies/new.hbs");
  }
});

//get the detailed page for one movie
router.get("/:id", async (req, res, next) => {
  try {
    res.render(
      "./../views/movies/show.hbs",
      await MovieModel.findById(req.params.id)
    );
  } catch (err) {
    next(err);
  }
});

// delete a movie
router.post("/:id/delete", async (req, res, next) => {
  try {
    const deletedMovie = await MovieModel.findByIdAndRemove(req.params.id);
    res.redirect("/movies");
  } catch (err) {
    next(err);
  }
});

// edit a movie
router.get("/:id/edit", async (req, res, next) => {
  try {
    res.render(
      "./../views/movies/edit.hbs",
      await MovieModel.findById(req.params.id)
    );
  } catch (err) {
    next(err);
  }
});

router.post("/:id", async (req, res, next) => {
  try {
    const updatedMovie = await MovieModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.redirect("/movies");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
