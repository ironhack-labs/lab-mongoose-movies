const express = require("express");
const router = express.Router();
const CelebrityModel = require("./../models/celibrityModel");

router.get("/new", (req, res, next) => {
      res.render("celebrities/new-celebrity");
});

router.post("/create", async (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
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
  .then((celebritiesFromDb) => {
    res.render("celebrities/celebrities", {celebrities: celebritiesFromDb})
  })
  .catch(next)
});

module.exports = router;
