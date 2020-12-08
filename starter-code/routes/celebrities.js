const express = require("express");
const router = express.Router();
const CelebrityModel = require("./../models/celebrity");
const mongoose = require("mongoose");

router.get("/", async (req, res, next) => {
  try {
    const celebs = await CelebrityModel.find();
    res.render("celebrities/index", { celebs });
  } catch (err) {
    next(err);
  }
});

router.get("/show/:id", async (req, res, next) => {
  try {
    const findCelebs = await CelebrityModel.findById(req.params.id);
    res.render("celebrities/show", findCelebs);
  } catch (err) {
    next(err);
  }
});

router.get("/new", (req, res) => {
  res.render("celebrities/new");
});

router.post("/", async (req, res, next) => {
  const newCeleb = { ...req.body };
  try {
    await CelebrityModel.create(newCeleb);
    res.redirect("celebrities");
  } catch (err) {
    next(err);
  }
});

router.post("/:id/delete", async (req, res, next) => {
  try {
    // use the model to delete one label by id
    const deletedCeleb = await CelebrityModel.findByIdAndRemove(req.params.id);
    res.redirect("/celebrities"); // then redirect to labels full list
  } catch (err) {
    next(err);
  }
});

module.exports = router;
