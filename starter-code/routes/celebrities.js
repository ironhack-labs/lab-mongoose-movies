const express = require("express");
const router = new express.Router();
const CelebrityModel = require("../models/Celebrity");

router.get("/", async (req, res, next) => {
  try {
    const celebs = await CelebrityModel.find();
    res.render("celebrities/index", { celebs });
  } catch (err) {
    next(err);
  }
});

router.get("/new", async (req, res) => {
  await res.render("celebrities/new");
});

router.get("/:id", async (req, res, next) => {
  try {
    const celebinfo = await CelebrityModel.findById(req.params.id);
    res.render("celebrities/show", celebinfo);
  } catch (err) {
    next(err);
  }
});

router.post("/new", async (req, res) => {
  try {
    await CelebrityModel.create(req.body);
    res.redirect("/celebrities");
  } catch (err) {
    next(err);
  }
});

router.post("/:id/delete", async (req, res, next) => {
  try {
    await CelebrityModel.findByIdAndRemove(req.params.id);
    res.redirect("/celebrities");
  } catch (err) {
    next(err);
  }
});

router.get("/:id/edit", async (req, res, next) => {
  try {
    const celebEdit = await CelebrityModel.findById(req.params.id);
    res.render("celebrities/edit", celebEdit);
  } catch (err) {
    next(err);
  }
});

router.post("/:id/edit", async (req, res, next) => {
  try {
    await CelebrityModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.redirect("/celebrities");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
