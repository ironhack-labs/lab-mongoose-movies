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
    const celebrity = req.body;
    await Celebrity.save(celebrity);
    res.redirect("celebrities/");
  } catch (err) {
    console.error(err);
    res.render("celebrities/new");
  }
});

// Show a form to create a celebrity
router.get("/new", async (req, res, next) => {
  res.render("celebrities/new", {title: "Add Celebrity"});
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

// Delete a specific celebrity
router.post("/:id/delete", async (req, res, next) => {
  const id = req.params.id;
  try {
    await Celebrity.findByIdAndRemove(id);
    res.redirect("celebrities/")
  } catch (err) {
    console.error(err);
    next();
  }
});



module.exports = router;
