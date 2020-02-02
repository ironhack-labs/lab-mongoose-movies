const express = require("express");
const router = express.Router();
const celebrity = require("../models/celebrity");

router.get("/celebrities", async (req, res) => {
  try {
    const celebrities = await celebrity.find();
    res.render("celebrities", { celebrities });
  } catch (e) {
    next();
  }
});

module.exports = router;
