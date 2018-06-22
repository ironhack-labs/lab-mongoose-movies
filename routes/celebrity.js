const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity.js");

router.get("/celebrities/index.hbs", (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      res.render("Celebrities", { celebrities });
    }, console.log(celebrities))
    .next(error => {
      console.log(error);
    });
});
