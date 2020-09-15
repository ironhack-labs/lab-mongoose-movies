const express = require("express");
const { get } = require("mongoose");
const { render } = require("../app");
const routerCelebrities = express.Router();
const Celebrities = require("../models/celebrity");

routerCelebrities.get("/celebrities", (req, res) => {
  try {
    //    console.log(Celebrities.find());
    res.render("celebrities/index", {
      celebrities: Celebrities.find(),
    });
  } catch (err) {
    console.error(err);
  }
});

module.exports = routerCelebrities;
