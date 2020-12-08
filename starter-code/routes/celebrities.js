const express = require("express");
const router = express.Router();
const CelebrityModel = require("./../models/celebrity");

router.get("/", async (req, res, next) => {
  try {
    const celebrities = await CelebrityModel.find();
    res.render("celebrities/index", { celebrities });
  } catch (err) {
    next(err);
  }
});

router.get("/new", (req, res) => {
  res.render("celebrities/new");
});

router.get("/:id", async (req, res, next) => {
  try {
    const celebrity = await CelebrityModel.findById(req.params.id);
    res.render("celebrities/show", celebrity);
  } catch (err) {
    next(err);
  }
});

router.post("/new", async (req, res, next) => {
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
