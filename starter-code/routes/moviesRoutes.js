const express = require("express");
const router = express.Router();
const MovieModel = require("./../models/movieModel");

router.get("/new", (req, res, next) => {
      res.render("movies/new-movie");
});

router.post("/create", async (req, res, next) => {
  const { title, occupation, catchPhrase } = req.body;
  try {
    await CelebrityModel.create({
      name,
      occupation,
      catchPhrase,
    });
    res.redirect("/");
  } catch (err) {
    next(err);
  }
});

router.get("/celebrities", (req, res, next) => {
  CelebrityModel.find()
  .then((celebrities) => {
    res.render("celebrities/celebrities", {celebrities})
  })
  .catch(next)
});

module.exports = router;