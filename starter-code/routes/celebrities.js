const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

router.get("/", async (req, res) => {
  try {
    const celebrities = await Celebrity.find();
    res.render("celebrities/index", { celebrities });
  } catch (e) {
    res.render("error", { e });
  }
});

module.exports = router;
