// Packages
const express = require("express");
const router = express.Router();

// Get Home page
router.get("/", function(req, res) {
  res.render("index", {"tabtitle": "Home"});
});

// Exports 
module.exports = router;