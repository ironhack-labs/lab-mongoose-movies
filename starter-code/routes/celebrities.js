const express = require("express");
const router = new express.Router();
const CelebrityModel = require("./../model/celebrity");


// *********************************************
// ALL THESE ROUTES ARE PREFIXED WITH "/celebrities"
// *********************************************

router.get("/", async (req, res, next) => {
  try {
    const celebrities = await CelebrityModel.find();
    res.render("celebrities/index", { celebrities });
  } catch (err) {
    next(err);
  }
});

router.get("/new", (req, res, next) => {
  res.render("celebrities/new");
});

router.post("/new", async (req, res, next) => {
  try {
    await CelebrityModel.create(req.body); // what difference with SAVE method ?
    res.redirect("/celebrities");
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    //console.log("in try");
    const celebrity = await CelebrityModel.findById(req.params.id);
    //console.log("found document in collection");
    res.render("celebrities/show", celebrity);
  } catch (err) {
    next(err);
  }
});

router.post("/:id/delete", async (req, res, next) => {
  try {
    //console.log("in try");
    await CelebrityModel.findByIdAndDelete(req.params.id);
    //console.log("deleted document in collection");
    res.redirect("/celebrities");
  } catch (err) {
    next(err);
  }
});

router.get("/:id/edit", async (req, res, next) => {
  try {
    const celeb = await CelebrityModel.findById(req.params.id);
    res.render("celebrities/edit", celeb);
  } catch (err) {
    next(err);
  }
});

router.post("/:id/edit", async (req, res, next) => {
  try {
    //console.log("in try");
    await CelebrityModel.findByIdAndUpdate(req.params.id, req.body);
    //console.log("updated document in collection");
    res.redirect("/celebrities");
  } catch (err) {
    next(err);
  }
});

/// SHOULD BE LAST

module.exports = router;
