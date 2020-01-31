const express = require("express");
const router = express.Router();
const dbHelper = require("../dbHelper");
const Celebrity = require("../models/celebrity.model");

router.get("/celebrities", async (req, res, next) => {
  try {
    const celebrities = await dbHelper.viewCelebrities();
    res.render("../views/celebrities/index.hbs", { celebrities });
  } catch (error) {
    next();
    return error;
  }
});

router.get("/celebrities/new", async (req, res, next) => {
  res.render("../views/celebrities/new.hbs");
});

router.post("/celebrities", async (req, res, next) => {
  try {
    const newCelebrity = new Celebrity(req.body);
    await newCelebrity.save();
    //await dbHelper.newCelebrity(name, occupation, catchPhrase);
    res.redirect("/celebrities");
  } catch (error) {
    res.render("../views/celebrities/new.hbs");
    return error;
  }
});

router.get("/celebrities/:id", async (req, res, next) => {
  try {
    const celebrity = await dbHelper.showCelebrity(req.params.id);
    res.render("../views/celebrities/show.hbs", celebrity);
  } catch (error) {
    next();
    return error;
  }
});

router.post("/celebrities/:id/delete", async (req, res, next) => {
  try {
    await dbHelper.deleteCelebrity(req.params.id);
    res.redirect("/celebrities");
  } catch (error) {
    next();
    return error;
  }
});

router.get("/celebrities/:id/edit", async (req, res, next) => {
  try {
    const celebrity = await dbHelper.showCelebrity(req.params.id);
    res.render("../views/celebrities/edit.hbs", celebrity);
  } catch (error) {
    next();
    return error;
  }
});

router.post("/celebrities/:id", async (req, res, next) => {
  try {
    const { name, occupation, catchPhrase } = req.body;
    await dbHelper.updateCelebrity(req.params.id, { name, occupation, catchPhrase });
    res.redirect("/celebrities");
  } catch (error) {
    next();
    return error;
  }
});

module.exports = router;
