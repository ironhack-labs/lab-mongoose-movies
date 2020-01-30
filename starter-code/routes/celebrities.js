const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

// Show all celebrities
router.get("/", async (req, res, next) => {
  try {
    const celebrities = await Celebrity.find();
    res.render("celebrities/index", { title: "Celebrities", celebrities });
  } catch (err) {
    console.error(err);
    next();
  }
});

// Send the data from the form to this route to create the celebrity and save to the database
router.post("/", async (req, res, next) => {
  try {
  } catch (err) {
    console.error(err);
    next();
  }
});

// Show a specific celebrity
router.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const celebrity = await Celebrity.findById(id);
    res.render("celebrities/show", {
      title: `Details | ${celebrity.name}`,
      celebrity
    });
  } catch (err) {
    console.error(err);
    next();
  }
});

// Show a form to create a celebrity
router.get("/new", async (req, res, next) => {
  try {
  } catch (err) {
    console.error(err);
    next();
  }
});

module.exports = router;
