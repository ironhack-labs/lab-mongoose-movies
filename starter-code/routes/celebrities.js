const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/celebrities/new", (req, res, next) => {
  res.render("new-celebrity");
});

module.exports = router;
