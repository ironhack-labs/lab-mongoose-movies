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

router.get("/:id", async (re, res, next => {
  try {
    const seed = await Celebrity.find();
    res.render("celebrities/show", { seed });
  }catch (error) {
    next();
  }

}))

module.exports = router;
