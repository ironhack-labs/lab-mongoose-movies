const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

//route to celebrities

router.get("/new", (req, res) => {
  res.render("celebrities/new");
});

router.post("/", (req, res) => {
  res.render("index");
});
module.exports = router;
