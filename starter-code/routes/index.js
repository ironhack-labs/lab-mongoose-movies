const express = require("express");
const router = express.Router();
const celebrityModel = require("./../models/celebrity");
const movyModel = require("../models/movy");

router.get("/", (req, res, next) => {
  res.render("index");
});

module.exports = router;
