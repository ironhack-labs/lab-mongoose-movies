const Celebrity = require("../models/Celebrity");
const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  //const seed = await Celebrity.find();
  res.render("celebrities/index"); //{ title: "Best Celebrities", seed }
});
