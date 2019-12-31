const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");
const mongoose = require("mongoose");

router.get("/", (req, res, next) => {
  Celebrity.find().then(celebrities => {
    res.render("celebrities/index", { celebrities });
  });
});

router.get("/new", (req, res, next) => {
  res.render("celebrities/new");
});

router.get("/:celebritiesId", (req, res, next) => {
  Celebrity.findById(req.params.celebritiesId).then(celebrity => {
    res.render("celebrities/show", celebrity);
  });
});

module.exports = router;
