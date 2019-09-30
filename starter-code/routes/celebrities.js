const express = require("express");
const router = express.Router();
const celebritiesModel = require("../models/Celebrity");

router.get("/", async (req, res, next) => {
  try {
    const celebrities = await celebritiesModel.find();
    res.render("celebrities/index", { celebrities });
  } catch (err) {
    throw new Error(err);
  }
});

router.get("/new", (req, res, next) => {
  res.render("celebrities/new");
});

router.post("/new", (req, res, next) => {
  console.log(req.body);
  const newPharse = new celebritiesModel(req.body);
  newPharse
    .save()
    .then(result => res.redirect("/celebrities"))
    .catch(err => res.render("celebrities/new"));
});

router.get("/:id", async (req, res, next) => {
  try {
    const celebrity = await celebritiesModel.findById(req.params.id);
    console.log(celebrity);
    res.render("celebrities/show", celebrity);
  } catch (err) {
    next(err);
  }
});
router.get("/:id/edit", async (req, res, next) => {
  try {
    const celebrity = await celebritiesModel.findById(req.params.id);
    console.log(celebrity);
    res.render("celebrities/edit", celebrity);
  } catch (err) {
    next(err);
  }
});
router.post("/:id/edit", async (req, res, next) => {
  try {
    const celebrity = await celebritiesModel.findByIdAndUpdate(req.params.id, req.body);

    res.redirect("/celebrities");
  } catch (err) {
    next(err);
  }
});

router.post("/:id/delete", async (req, res, next) => {
  try {
    const celebrity = await celebritiesModel.findByIdAndRemove(req.params.id);
    res.redirect("/celebrities");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
