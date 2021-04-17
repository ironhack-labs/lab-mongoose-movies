const express = require("express");
const Celebrity = require("../models/celebrity");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.redirect("/celebrities");
});

module.exports = router;
