const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

// Retrieve -> Get a list of all celebrities
router.get("/", async (req, res, next) => {
  try {
    const celebrities = await Celebrity.find();
    res.render("celebrities/index", { celebrities });
  } catch (e) {
    //check if this works
    next();
  }
});

// Retrieve -> Get a specific celebrity and show a separate page
router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const celebrity = await Celebrity.findById(id);
    res.render("celebrities/show", { celebrity });
  } catch (e) {
    next();
  }
});

module.exports = router;
