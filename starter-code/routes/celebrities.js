const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity");

router.get("/", async (req, res) => {
  try {
    const celebrities = await Celebrity.find();
    res.render("celebrities", { celebrities });
  } catch (e) {
    next();
  }
});

module.exports = router;
