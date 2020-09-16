const express = require("express");
const router = express.Router();

// Models
const Celebrity = require("../models/Celebrity.model");
const Movie = require("../models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

// --------- CELEBRITIES ROUTES ---------
// GET All celebrities
router.get("/celebrities", async (req, res) => {
  try {
    const result = await Celebrity.find();
    res.render("celebrities", { celebrities: result });
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
});

// GET Celebrity detail
router.get("/celebrities/:id", async (req, res) => {
  try {
    const result = await Celebrity.findOne({ _id: req.params.id });
    res.render("celebrityDetail", result);
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
});

// GET Celebrity Add form
router.get("/create-celebrity", (req, res) => res.render("celebrityForm"));

// POST Create new celebrity
router.post("/create-celebrity", async (req, res) => {
  try {
    result = await Celebrity.create(req.body);
    res.redirect("/celebrities");
  } catch (err) {
    console.error(err);
  }
});

// GET Delete celebrity
router.get("/delete-celebrity/:id", async (req, res) => {
  try {
    const result = await Celebrity.deleteOne({ _id: req.params.id });
    res.redirect("/celebrities");
  } catch (err) {
    console.error(err);
  }
});

// GET Edit Celebrity form
router.get("/edit-celebrity/:id", async (req, res) => {
  try {
    const result = await Celebrity.findOne({ _id: req.params.id });
    res.render("celebrityEditForm", result);
  } catch (err) {
    console.error(err);
  }
});

// POST Edit Celebrity
router.post("/edit-celebrity/:id", async (req, res) => {
  try {
    const result = await Celebrity.updateOne({ _id: req.params.id }, { $set: req.body });
    res.redirect("/celebrities");
  } catch (error) {
    console.error(err);
  }
});

// --------- MOVIES ROUTES ---------
// GET All movies
router.get("/movies", async (req, res) => {
  try {
    const result = await Movie.find();
    res.render("movies", { movies: result });
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
});

// GET movie detail
router.get("/movies/:id", async (req, res) => {
  try {
    const result = await Movie.findOne({ _id: req.params.id });
    res.render("movieDetail", result);
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
});

// GET Movie Add form
router.get("/create-movie", (req, res) => res.render("movieForm"));

// POST Create new movie
router.post("/create-movie", async (req, res) => {
  try {
    result = await Movie.create(req.body);
    res.redirect("/movies");
  } catch (err) {
    console.error(err);
  }
});

// GET Delete movie
router.get("/delete-movie/:id", async (req, res) => {
  try {
    const result = await Movie.deleteOne({ _id: req.params.id });
    res.redirect("/movies");
  } catch (err) {
    console.error(err);
  }
});

// GET Edit movie form
router.get("/edit-movie/:id", async (req, res) => {
  try {
    const result = await Movie.findOne({ _id: req.params.id });
    res.render("movieEditForm", result);
  } catch (err) {
    console.error(err);
  }
});

// POST Edit movie
router.post("/edit-movie/:id", async (req, res) => {
  try {
    const result = await Movie.updateOne({ _id: req.params.id }, { $set: req.body });
    res.redirect("/movies");
  } catch (error) {
    console.error(err);
  }
});

module.exports = router;
