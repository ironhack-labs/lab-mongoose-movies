const express = require("express");
const router = express.Router();

// ********* require model in order to use it *********
const Celebrity = require("./../models/celebrity");

// ****************************************************************************************
// GET route to list all celebrities
// ****************************************************************************************

router.get("/", async (req, res, next) => {
  try {
    const celeb = await CelebrityModel.find();
    res.render("celebrities/celebrities", { celebrities });
  } catch (error) {
    next(error);
  }
});

// ****************************************************************************************
// GET route to add a new celebrity
// ****************************************************************************************

router.get("/new", async (req, res, next) => {
  res.render("celebrities/new-celebrity.hbs");
});

// ****************************************************************************************
// POST route for saving a new celebrity in the database
// ****************************************************************************************

router.post("/create", async (req, res, next) => {
  try {
    const newCeleb = { ...req.body };
    await Celebrity.create(newCeleb);
    res.redirect("/");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
