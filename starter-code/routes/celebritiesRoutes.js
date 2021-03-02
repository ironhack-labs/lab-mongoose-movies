const express = require("express");

const router = express.Router();

const CelebrityModel = require("../models/Celebrity");

// const uploader = require()

//Celeb get

router.get("/new", (req, res) => {
  console.log("yo");
  res.render("celebrities/new-celebrity.hbs");
});

router.post("/create", async (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  console.log(req.body)
  try {
    await CelebrityModel.create({
      name,
      occupation,
      catchPhrase
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
      console.log(dbRes);
      res.render("celebrities/celebrities.hbs", { myCelebrities: dbRes });
      // console.log(myCelebrities);
    })
    .catch((err) => res.send(err));
});

module.exports = router;
