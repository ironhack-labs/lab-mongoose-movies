const express = require("express");
const router = express.Router();
const Character = require("../models/MovieCharacters");

router.get("/", (req, res, next) => {
  res.render("index", {
    title: "Home"
  });
});

module.exports = router;
