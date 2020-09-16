const express = require("express");
const { get } = require("mongoose");
const { render } = require("../app");
const Celebrities = require("../models/celebrity");

const routerCelebrities = express.Router();

// Celebrities List - cRud
routerCelebrities.get("/celebrities", (req, res) => {
  Celebrities.find()
    .then(celebrities => {
      res.render("celebrities/index", { celebrities });
      console.log("Rendering celebrities");
    })
    .catch(err => console.error("Celebreties ERROR:", err));
});

// Add celebrity - Crud
routerCelebrities.get("/celebrities/new", (req, res) => {
  res.render("celebrities/new");
});

routerCelebrities.post("/celebrities", async (req, res) => {
  try {
    const newCeleb = await new Celebrities({
      name: req.body.name,
      occupation: req.body.occupation,
      catchPhrase: req.body.catchPhrase
    })
    await newCeleb.save();
    console.log("Adding a celebrity");
    res.redirect("/celebrities");
  } catch (err) {
    res.render("celebrities/new");
    console.error("Adding celebrity ERROR:", err);
  };
});

// Edit celebrity - crUd
routerCelebrities.get("/celebrities/:id/edit", async (req, res) => {
  try {
    const celebrity = await Celebrities.findById(req.params.id);
    console.log("Editing a celebrity");
    res.render("celebrities/edit", { celebrity });
  } catch (err) {
    console.error("Edit get ERROR:", err);
  };
});

routerCelebrities.post("/celebrities/:id", async (req, res) => {
  try {
    const { name, occupation, catchPhrase } = req.body;
    await Celebrities.findByIdAndUpdate(req.params.id, { name, occupation, catchPhrase });
    console.log("Updated celebrity");
    res.redirect("/celebrities");
  } catch (err) {
    console.error("Edit post ERROR:", err);
  };
});

// Celebrity Details - cRud
routerCelebrities.get("/celebrities/:id", async (req, res) => {
  try {
    const celebrity = await Celebrities.findById(req.params.id);
    res.render("celebrities/show", { celebrity });
    console.log("Rendering a celebrity");
  } catch (err) {
    console.error("Celebrity details ERROR:", err);
  };
});

// Delete celebrity - cruD
routerCelebrities.post("/celebrities/:id/delete", async (req, res) => {
  try {
    await Celebrities.findByIdAndDelete(req.params.id);
    console.log("Deleting a celebrity");
    res.redirect("/celebrities");
  } catch (err) {
    console.error("Delete ERROR:", err);
  };
});

module.exports = routerCelebrities;