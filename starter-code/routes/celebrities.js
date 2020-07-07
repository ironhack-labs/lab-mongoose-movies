const express = require("express");
const router = express.Router();
const celebrityModel = require("../models/celebrity");

router.get("/celebrities", (req, res, next) => {
  celebrityModel
    .find()
    .then((dbRes) => {
      console.log(dbRes);

      res.render("celebrities/index", {
        celebrities: dbRes,
      });
    })
    .catch(next);
});

router.get("/celebrities/:id", async (req, res, next) => {
  try {
    res.render("celebrities/show", {
      celebrity: await celebrityModel.findById(req.params.id),
    });
  } catch (err) {
    next(err);
  }
});

router.get("/new", (req, res) => {
  res.render("celebrities/new");
});

router.post("/new", async (req, res, next) => {
  const newCelebrity = req.body;
  try {
    await celebrityModel.create(newCelebrity);
    res.redirect("/celebrities");
  } catch (err) {
    next(err);
  }
});

router.get("/celebrities/delete/:id", async (req, res, next) => {
  try {
    await celebrityModel.findByIdAndRemove(req.params.id);
    res.redirect("/celebrities");
  } catch (err) {
    next(err);
  }
});

router.get("/celebrities/edit/:id", (req, res, next) => {
  celebrityModel
    .findById(req.params.id)
    .then((cel) => {
      res.render("celebrities/edit", { cel });
    })
    .catch(next);
});

router.post("/celebrities/edit/:id", (req, res, next) => {
  const upceleb = req.body;
  celebrityModel
    .findByIdAndUpdate(req.params.id, upceleb)
    .then((dbRes) => {
      res.redirect("/celebrities");
    })
    .catch(next);
});

module.exports = router;
