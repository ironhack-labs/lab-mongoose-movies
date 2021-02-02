const express = require("express");
const app = require("../app");
const { update } = require("./../models/Celebrity");
const router = new express.Router();
const CelebrityModel = require("./../models/Celebrity");

// get all
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

//show details of one artist
router.get("/celebrities/:id", async (req, res, next) => {
  try {
    const oneCelebritie = await CelebrityModel.findById(req.params.id);
    res.render("celebrities/show", oneCelebritie);
  } catch (err) {
    next(err);
  }
});

//udate one
router.get("/celebrities/edit/:id", async (req, res, next) => {
  try {
    const editCelebrities = await CelebrityModel.findById(req.params.id);
    res.render("./celebrities/edit", editCelebrities);
  } catch (err) {
    next(err);
  }
});

router.post("/celebrities/edit/:id", async (req, res, next) => {
  try {
    const updatedCelebrities = await CelebrityModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.redirect("/celebrities");
  } catch (err) {
    next(err);
  }
});

// delete one
router.post("/celebrities/delete/:id", async (req, res, next) => {
  try {
    await CelebrityModel.findByIdAndRemove(req.params.id);
    res.redirect("/celebrities");
  } catch (err) {
    next(err);
  }
});

//create one
router.post("/celebrities/new", async (req, res, next) => {
  try {
    await CelebrityModel.create(req.body);
    res.redirect("/celebrities");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
