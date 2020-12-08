const express = require("express");
const app = require("../app");
const router = new express.Router();
const CelebrityModel = require("./../models/Celebrity");

router.get("/celebrities", async (req, res, next) => {
  try {
    const allCelebrities = await CelebrityModel.find();
    // console.log("HERE", allCelebrities);
    res.render("./celebrities/index", { allCelebrities });
  } catch (err) {
    next(err);
  }
});

router.get("/celebrities/new", async (req, res, next) => {
  await res.render("./celebrities/new");
});

router.get("/celebrities/:id", async (req, res, next) => {
  try {
    const oneCelebritie = await CelebrityModel.findById(req.params.id);
    res.render("celebrities/show", oneCelebritie);
  } catch (err) {
    next(err);
  }
});

router.post("/celebrities/delete/:id", async (req, res, next) => {
  try {
    await CelebrityModel.findByIdAndRemove(req.params.id);
    res.redirect("/celebrities");
  } catch (err) {
    next(err);
  }
});

router.post("/celebrities/new", async (req, res, next) => {
  try {
    await CelebrityModel.create(req.body);
    res.redirect("/celebrities");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
