const express = require("express");
const router = new express.Router();
const CelebrityModel = require("./../models/celebrity");

// GET - all celebrities
router.get("/celebrities", async (req, res, next) => {
  try {
    res.render("celebrities", { celebrities: await CelebrityModel.find() });
  } catch (err) {
    next(err);
  }
});

router.get("/celebrities/new", async (req, res, next) => {
  res.render("./celebrities/new");
});

router.post("/celebrities/new", async (req, res, next) => {
  try {
    await CelebrityModel.create(req.body);
    res.redirect("/celebrities");
  } catch (err) {
    next(err);
  }
});

router.get("/celebrities/:id", (req, res, next) => {
  CelebrityModel.findById(req.params.id)
    .then((celebrityInfo) => {
      res.render("celebrities/show", celebrityInfo);
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
});

router.post("/celebrities/:id/delete", (req, res, next) => {
  CelebrityModel.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
});

module.exports = router;