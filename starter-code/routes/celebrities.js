const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

router.get("/", async (req, res, next) => {
  try {
    const celebrities = await Celebrity.find();
    res.render("celebrities/index", { celebrities });
  } catch (e) {
    //check if this works
    next();
  }
});

module.exports = router;
