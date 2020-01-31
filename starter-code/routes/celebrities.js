const express = require("express");
const router = express.Router();
const Celebrities = require("../models/celebrity");

/* GET show all celebrities */
router.get("/", async (req, res, next) => {
  try {
    const celebrities = await Celebrities.find();
    res.render("celebrities/index", { celebrities });
  } catch (error) {
    console.log(`Celebrities.js - Error retrieving all celebrities ${error}`);
  }
});

/* GET form to add a celebrity */
router.get("/new", (req, res, next) => {
  res.render("celebrities/new");
});

/* GET form to add a celebrity */
router.post("/new", async (req, res, next) => {
  try {
    const { name, occupation, catchPhrase } = req.body;
    const obj = await Celebrities.create({ name, occupation, catchPhrase });
    console.log(`Celebrities.js - Added new celebrity ${obj}`);
    res.redirect("/celebrities");
  } catch (error) {
    console.log(`Celebrities.js - Error adding new celebrity ${error}`);
    res.render("celebrities/new");
  }
});

/* GET find a celebritie according to its id */
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const celebrity = await Celebrities.findById(id);
    res.render("celebrities/show", { celebrity });
  } catch (error) {
    console.log(`Celebrities.js - Error finding celebrity by id ${error}`);
  }
});

/* POST delete a celebritie according to its id */
router.post("/:id/delete", async (req, res, next) => {
  try {
    const { id } = req.params;
    const celebrity = await Celebrities.findByIdAndRemove(id);
    console.log(`Celebrities.js - Celebrity deleted ${celebrity}`);
    res.redirect("/celebrities");
  } catch (error) {
    console.log(`Celebrities.js - Error deleting celebrity by id ${error}`);
  }
});

/* GET edit a celebritie according to its id */
router.get("/:id/edit", async (req, res, next) => {
  try {
    const { id } = req.params;
    const celebrity = await Celebrities.findById(id);
    res.render("celebrities/edit", { celebrity });
  } catch (error) {
    console.log(`Celebrities.js - Error editing celebrity by id ${error}`);
  }
});

/* GET find a celebritie according to its id */
router.post("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, occupation, catchPhrase } = req.body;
    const celebrity = await Celebrities.findByIdAndUpdate(id, {
      name,
      occupation,
      catchPhrase
    });
    console.log(`Celebrities.js - Celebrity updated ${celebrity} `);
    res.redirect("/celebrities");
  } catch (error) {
    console.log(`Celebrities.js - Error updating celebrity by id ${error}`);
  }
});

module.exports = router;
