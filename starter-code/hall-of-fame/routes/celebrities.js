require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const Celeb = require("../models/Famous");
const router = express.Router();

dbURL = process.env.DBURL;

/* GET celebrities list */
router.get("/index", (req, res, next) => {
  /* **Personal note:** Here there's no need to do moongoose.connect because app.js already does it constantly */

  Celeb.find()
    .then(celebs => {
      res.render("celebrities/index", { celebs });
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
