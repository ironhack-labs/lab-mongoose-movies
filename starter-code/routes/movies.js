const express = require("express");
const router = new express.Router();
const MovieModel = require("./../model/Movie");

/* GET movies listing. */
router.get("/", async (req, res, next) => {
  try {
    const movies = await MovieModel.find();

    res.render("movies", { movies });
  } catch (err) {
    next(err);
  }
});

router.get("/:id/delete", async (req, res, next) => {
  try {
    await MovieModel.findByIdAndDelete(req.params.id);
    res.redirect("/movies");
  } catch (err) {
    next(err);
  }
});

router.get("/new", (req, res) => {
  res.render("new-movie");
});

router.post("/add", async (req, res, next) => {
  const newMovie = { ...req.body };

  try {
    await MovieModel.create(newMovie);
    res.redirect("/");
  } catch (err) {
    console.log(err);
    res.redirect("/new");
  }
});

router.get("/:id/edit", async (req, res, next) => {
  try {
    const movieEdit = await MovieModel.findById(req.params.id);
    res.render("edit-movie", movieEdit);
  } catch (err) {
    next(err);
  }
});

router.post("/:id", async (req, res, next) => {
  const MovieToUpdate = { ...req.body };
  try {
    await MovieModel.findByIdAndUpdate(req.params.id, MovieToUpdate, {
      new: true,
    });
    res.redirect("/movies");
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const movieId = await MovieModel.findById(req.params.id);

    res.render("movie", { movieId });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
