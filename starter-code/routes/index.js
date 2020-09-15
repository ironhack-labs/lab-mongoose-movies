const express = require("express");
const Celebrity = require("../models/celebrity.model");
const Movie = require("../models/movie.model");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/celebrities", async (req, res) => {
  try {
    const celebResult = await Celebrity.find();
    res.render("celebrities", { celebResult });
  } catch (err) {
    console.log("Error: " + err);
  }
});

router.get("/celebrities/:id", async (req, res) => {
  try {
    const celebOneResult = await Celebrity.findOne({ _id: req.params.id });
    console.log(celebOneResult);
    res.render("showCelebrities.hbs", celebOneResult);
  } catch (err) {
    console.log("Error: " + err);
  }
});

router.get("/create-celebrity", async (req, res) => {
  res.render("newCelebrity");
});

router.post("/create-celebrity", async (req, res) => {
  try {
    await Celebrity.create(req.body);
    res.render("index");
  } catch (err) {
    console.log("Error: " + err);
  }
});

router.get("/celebrities/:id/delete", async (req, res) => {
  try {
    await Celebrity.deleteOne({ _id: req.params.id });
    res.redirect("/celebrities");
  } catch (err) {
    console.log("Error: " + err);
  }
});

router.get("/celebrities/:id/edit", async (req, res) => {
  const editCeleb = await Celebrity.findOne({ _id: req.params.id });
  res.render("editCelebrity", editCeleb);
});

router.post("/celebrities/:id", async (req, res) => {
  try {
    await Celebrity.updateOne({ _id: req.params.id }, { $set: req.body });
    res.redirect(`/celebrities/${req.params.id}`);
  } catch (err) {
    console.log("Error: " + err);
  }
});

// ----------- MOVIES ----------------------------------------------

router.get("/movies", async (req, res) => {
  try {
    const movieResult = await Movie.find();
    res.render("movie", { movieResult });
  } catch (err) {
    console.log("Error: " + err);
  }
});

router.get("/movies/:id", async (req, res) => {
  try {
    const movieOneResult = await Movie.findOne({ _id: req.params.id });
    console.log(movieOneResult);
    res.render("showMovie", movieOneResult);
  } catch (err) {
    console.log("Error: " + err);
  }
});

router.get("/create-movie", async (req, res) => {
  res.render("newMovie");
});

router.post("/create-movie", async (req, res) => {
  try {
    await Movie.create(req.body);
    res.render("index");
  } catch (err) {
    console.log("Error: " + err);
  }
});

router.get("/movies/:id/delete", async (req, res) => {
  try {
    await Movie.deleteOne({ _id: req.params.id });
    res.redirect("/movies");
  } catch (err) {
    console.log("Error: " + err);
  }
});

router.get("/movies/:id/edit", async (req, res) => {
  const editMovie = await Movie.findOne({ _id: req.params.id });
  res.render("editMovie", editMovie);
});

router.post("/movies/:id", async (req, res) => {
  try {
    await Movie.updateOne({ _id: req.params.id }, { $set: req.body });
    res.redirect(`/movies/${req.params.id}`);
  } catch (err) {
    console.log("Error: " + err);
  }
});

module.exports = router;
