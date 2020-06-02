const express = require("express");
const router = express.Router();

// GET home  //
router.get("/", (req, res, next) => {
  res.render("index");
});

module.exports = router;
