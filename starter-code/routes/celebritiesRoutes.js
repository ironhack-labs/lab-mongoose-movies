const express = require("express");

const router = express.Router();

const CelebrityModel = require("../models/Celebrity");

// const uploader = require()

//Celeb get

router.get("/new", (req, res) => {
  res.render("celebrities/new-celebrity.hbs", { style: ["forms.css"] });
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

//It3

router.get("/", (req, res) => {
  CelebrityModel.find()
    .then((dbRes) => {
      res.render("celebrities/celebrities.hbs", {
        myCelebrities: dbRes,
        style: ["list.css"],
      });
    })
    .catch((err) => res.send(err));
});

module.exports = router;
