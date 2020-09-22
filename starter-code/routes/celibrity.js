const express = require("express");
const router = express.Router();
const Celebrities = require("../models/celebrity");

router.get("/", (req, res, next) => {
  Celebrities.find({})
    .then((celebritiesResult) => {
      res.render("celebrities.hbs", { celebritiesResult });
    })
    .catch((error) => {
      next(error);
    });
});

//create a celebrity
router.get("/new", (req, res) => {
  res.render("celebrities/new.hbs");
});

router.post("/new", async (req, res) => {
  try {
    await Celebrities.create(req.body);
    res.redirect("/celebrities");
  } catch (err) {
    res.render("celebrities/new.hbs");
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const celebrity = await Celebrities.findById(req.params.id);
    res.render("celebrities/show.hbs", { celebrity });
  } catch (error) {
    next(error);
  }
});

//delete celebrities
router.post("/:id/delete", async (req, res, next) => {
  try {
    await Celebrities.findByIdAndRemove(req.params.id);
    res.redirect("/celebrities");
  } catch (err) {
    next(err);
  }
});

router.get("/:id/edit", async (req, res, next) => {
  try {
    const celeb = await Celebrities.findById(req.params.id);
    res.render("celebrities/edit.hbs", { celeb });
  } catch (err) {
    next(err);
  }
});

router.post("/:id/edit", async (req, res, next) => {
  try {
    await Celebrities.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/celebrities");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
