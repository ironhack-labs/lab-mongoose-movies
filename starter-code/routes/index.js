const express = require("express");
const router = express.Router();

console.log("Back in black");
/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Heya good looking" });
  console.log("cheers");
});

module.exports = router;
