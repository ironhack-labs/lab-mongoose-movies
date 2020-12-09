const express = require("express");
const router = express.Router();
const CelebrityModel = require("./../models/Celebrity");

router.get("/celebrities", async (req, res, next) => {
  try {
    const celebrities = await CelebrityModel.find();
    res.render("./celebrities/index", { celebrities });
  } catch (err) {
    next(err);
  }
});

router.get("/celebrities/new", async (req, res, next) => {
  res.render("./celebrities/new");
});

router.get("/celebrities/:id", async (req, res, next) => {
  try {
    const celebrity = await CelebrityModel.findById(req.params.id);
    res.render("./celebrities/show", celebrity);
  } catch (err) {
    next(err);
  }
});

router.get("/celebrities/:id/edit", async (req, res) => {
  try {
    const celebrityToEdit = await CelebrityModel.findOne({
      _id: req.params.id,
    });
    res.render("./celebrities/formEditCelebrity", celebrityToEdit);
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

router.post("/celebrities/:id/delete", async (req, res, next) => {
  try {
    await CelebrityModel.findByIdAndRemove(req.params.id);
    res.redirect("/celebrities");
  } catch (err) {
    next(err);
  }
});

router.post("/celebrities/:id/edit", async (req, res, next) => {
  try {
    await CelebrityModel.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/celebrities");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
