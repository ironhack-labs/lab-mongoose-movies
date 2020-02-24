const express = require("express");
const router = express.Router();
const Movies = require("../models/Movies");
const Celebrities = require ("../models/Celebrities")

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/movies", async (req, res) => {
  const all = await Movies.find();
  res.render("/Movies/index", { all });
});

router.get("/celebrities", async (req, res) => {
  const all = await Celebrities.find();
  res.render("celebrities/index", { all });
});

module.exports = router;
