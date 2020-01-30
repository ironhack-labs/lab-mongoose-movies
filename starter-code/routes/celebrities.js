const Celebrity = require("../models/Celebrity");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const seed = await Celebrity.find();
    res.render("celebrities/index", { seed });
  } catch (error) {
    //check if this works
    next();
  }
});

module.exports = router;
