const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");
const Movie = require("../models/Movie");

/* GET home page */
router.get("/", (req, res) => {
  res.render("index");
});

router.get("/celebrities/", async (req, res, next) => {
  try {
    theCelebs = await Celebrity.find();
    res.render("allcelebrities", { theCelebs });
  } catch (err) {
    next(err);
  }
});

router.get("/celebrities/new", (req, res) => {
  res.render("new");
});

router.get("/celebrities/:theID/edit", async (req, res, next) => {
  try {
    theCeleb = await Celebrity.findById(req.params.theID);
    res.render("edit", { theCeleb });
  } catch (err) {
    next(err);
  }
});

router.post("/celebrities/:id/edit", (req, res, next) => {
  let id = req.body.id;
  let update = { ...req.body };
  Celebrity.findByIdAndUpdate(id, update, { new: true })
    .then(rap => {
      res.redirect("/celebrities");
    })
    .catch(err => {
      next(err);
    });
});

router.get("/celebrities/:theID", async (req, res, next) => {
  try {
    theCeleb = await Celebrity.findById(req.params.theID);
    res.render("show", { theCeleb });
  } catch (err) {
    next(err);
  }
});

router.post("/celebrities", async (req, res, next) => {
  try {
    await Celebrity.create({ ...req.body });
    res.redirect("/celebrities");
  } catch (err) {
    res.redirect("/celebrities/new");
    next(err);
  }
});

router.post("/celebrities/:theID/delete", async (req, res, next) => {
  try {
    await Celebrity.findByIdAndRemove(req.params.theID);
    res.redirect("/celebrities");
  } catch (err) {
    next(err);
  }
});

router.get("/movies", async (req, res, next) => {
  try {
    theMovies = await Movie.find();
    res.render("movies", { theMovies });
  } catch (err) {
    next(err);
  }
});
module.exports = router;
