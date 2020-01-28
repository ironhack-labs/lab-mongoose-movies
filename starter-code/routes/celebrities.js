const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

// Read celebrities
router.get("/", async (req, res) => {
  const celebrities = await Celebrity.find();
  res.render("celebrities/index", { title: "Celebridades", celebrities });
});

module.exports = router;
