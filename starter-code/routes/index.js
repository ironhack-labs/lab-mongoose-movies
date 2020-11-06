const express = require("express");
const { get } = require("mongoose");
const { render } = require("../app");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

module.exports = router;
