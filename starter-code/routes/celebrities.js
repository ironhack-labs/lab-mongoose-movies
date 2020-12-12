const express = require("express");
const { route } = require(".");
const router = express.Router();
const celebrityModel = require("./../models/Celebrity");

//READ all the database
router.get("/celebrities", async (req, res, next) => {
  try {
    const allCelebrities = await celebrityModel.find();
    res.render("celebrities/index", { allCelebrities });
  } catch (error) {
    next(error);
  }
});

//READ PART
router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new");
});

//READ "ONE" PART using ID --> variable part for same length have to be hoisted at the end
router.get("/celebrities/:id", async (req, res, next) => {
  try {
    const celebrity = await celebrityModel.findById(req.params.id);
    res.render("celebrities/show", celebrity);
  } catch (error) {
    next(error);
  }
});

//Create PART
router.post("/celebrities", async (req, res, next) => {
  try {
    await celebrityModel.create(req.body);
    console.log(req.body);
    res.redirect("celebrities");
  } catch (error) {
    next(error);
  }
});

//Delete PART
router.post("/celebrities/:id/delete", async (req, res, next) => {
  try {
    await celebrityModel.findByIdAndDelete(req.params.id);
    res.redirect("/celebrities");
  } catch (error) {
    next(error);
  }
});

//Update Part --> GET
router.get("/celebrities/:id/edit", async (req, res, next) => {
  try {
    const editCelebrity = celebrityModel.findById(req.params.id);
    res.render("celebrities/edit", editCelebrity);
  } catch (error) {
    next(error);
  }
});

//Update Part --> POST
router.post("/celebrities/:id", async (req, res, next) => {
  try {
    await celebrityModel.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/celebrities");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
