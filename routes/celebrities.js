const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity");

/* GET home page */
router.get("/", (req, res, next) => {
  Celebrity.find().then((celebs) => {
    res.render("./celebrities/index", { celebs: celebs });
  });
});

router.get("/new", (req, res, next) => {
  res.render("./celebrities/new").then(() => {});
});

router.post("/new", (req, res, next) => {
  let newCeleb = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase,
  };

  Celebrity.create(newCeleb).then(() => {
    res.redirect("/celebrities");
  });
});

router.get("/:id/edit", (req, res, next) => {
  Celebrity.findById(req.params.id).then((celeb) => {
    res.render("celebrities/edit", { celeb: celeb });
  });
});

router.post("/:id/edit", (req, res, next) => {
  updatedCeleb = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase,
  };

  Celebrity.findByIdAndUpdate(req.params.id, updatedCeleb).then(() => {
    res.redirect("/celebrities");
  });
});

router.post("/:id/delete", (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id).then(() =>
    res.redirect("/celebrities")
  );
});

router.get("/:id", (req, res, next) => {
  Celebrity.findById(req.params.id).then((celeb) => {
    res.render("./celebrities/show", { celeb: celeb });
  });
});
module.exports = router;
