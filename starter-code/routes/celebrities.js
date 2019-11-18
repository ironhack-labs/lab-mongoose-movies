const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

router.get("/celebrities", async (req, res, next) => {
  const celebrities = await Celebrity.find({});
  if (celebrities) {
    res.render("celebrities", { celebrities });
  } else {
    next();
  }
});

router.get("/celebrities/new", async (req, res) => {
  res.render("celebrities/new");
});

router.get("/celebrities/:_id", async (req, res, next) => {
  const { _id } = req.params;
  const celebrity = await Celebrity.findOne({ _id });
  if (celebrity) {
    res.render("celebrities/show", { celebrity });
  } else {
    next();
  }
});

router.get("/celebrities/:_id/edit", async (req, res, next) => {
  const { _id } = req.params;
  const celebrity = await Celebrity.findOne({ _id });
  if (celebrity) {
    res.render("celebrities/edit", { celebrity });
  } else {
    next();
  }
});

router.post("/celebrities", async (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const celebrity = { name, occupation, catchPhrase };
  const createResult = await Celebrity.create(celebrity);
  if (createResult) {
    res.redirect("/celebrities");
  } else {
    res.render("/celebrities/new", { error: "Error saving the celebrity" });
  }
});

router.post("/celebrities/:_id", async (req, res) => {
  const { _id } = req.params;
  const { name, occupation, catchPhrase } = req.body;
  const celebrity = await Celebrity.findByIdAndUpdate(
    { _id },
    { name, occupation, catchPhrase }
  );
  if (celebrity) {
    res.redirect("/celebrities");
  } else {
    res.render("/celebrities/edit", {
      celebrity,
      error: "Error saving the celebrity"
    });
  }
});

router.post("/celebrities/:_id/delete", async (req, res, next) => {
  const { _id } = req.params;
  const deleteResult = await Celebrity.findOneAndDelete({ _id });
  if (deleteResult) {
    res.redirect("/celebrities");
  } else {
    next();
  }
});

module.exports = router;
