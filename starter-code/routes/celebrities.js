const express = require("express");
const router = new express.Router();
const CelebrityModel = require("./../models/Celebrity");

// GET - all celebrities page
router.get("/celebrities", async (req, res, next) => {
  try {
    const celeb = await CelebrityModel.find();
    res.render("./celebrities/index", { celeb });
  } catch (err) {
    next(err);
  }
});

// GET - create one celebrity with a form
router.get("/celebrities/new", async (req, res, next) => {
  const celebs = await CelebrityModel.find();
  res.render("./celebrities/new", { celebs });
});

// GET - update one celebrities(form)
router.get("/celebrities/:id/edit", async (req, res, next) => {
  try {
    const updateCeleb = await CelebrityModel.findById(req.params.id);
    res.render("./celebrities/edit", updateCeleb);
  } catch (err) {
    next(err);
  }
});

// GET - one celebrity by id
router.get("/celebrities/:id", async (req, res, next) => {
  try {
    const oneCelebrity = await CelebrityModel.findById(req.params.id);
    res.render("./celebrities/show", oneCelebrity);
  } catch (err) {
    next(err);
  }
});

// GET - delete one celebrity
router.get("/celebrities/:id/delete", async (req, res, next) => {
  try {
    await CelebrityModel.findByIdAndRemove(req.params.id);
    res.redirect("/celebrities");
  } catch (err) {
    next(err);
  }
});

// POST - create one celebrity with a form
router.post("/celebrities/new", async (req, res, next) => {
  try {
    const newCeleb = { ...req.body };
    await CelebrityModel.create(newCeleb);
    res.redirect("/celebrities");
  } catch (err) {
    next(err);
  }
});

// POST - update one celebrities (form)
router.post("/celebrities/:id/edit", async (req, res, next) => {
  try {
    const celebUpdate = { ...req.body };
    await CelebrityModel.findByIdAndUpdate(req.params.id, celebUpdate, {
      new: true,
    });
    res.redirect("/celebrities");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
