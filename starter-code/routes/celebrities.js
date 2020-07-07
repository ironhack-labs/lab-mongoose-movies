const express = require("express");
const router = new express.Router();
const Celebrity = require("../models/celebrity");

router.get("/celebrities", async (req, res, next) => {
  try {
    const celebrities = await Celebrity.find();

    res.render("celebrities/index", { celebrity: celebrities });
  } catch (err) {
    next(err);
  }
});

router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new");
});

router.post("/celebrities/new", (req, res, next) => {
  Celebrity.create(req.body)
    .then((dbRes) => {
      res.redirect("/celebrities");
    })
    .catch((err) => console.log("Error", err));
});

router.get("/celebrities/:id/edit", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then((celebrity) => res.render("celebrities/edit", celebrity))
    .catch((error) => error);
});

router.post("/celebrities/:id/edit", (req, res, next) => {
  Celebrity.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.redirect("/celebrities"))
    .catch((error) => error);
});

router.get("/celebrities/:id", (req, res, next) => {
  const id = req.params.id;
  Celebrity.findById(id)
    .then((celebrity) => res.render("celebrities/show", celebrity))
    .catch((error) => console.log(error));
});

router.get("/celebrities/delete/:id", (req, res) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then((dbRes) => res.redirect("/celebrities"))
    .catch((dbError) => res.send("ERROR while celebrity removal"));
});

module.exports = router;
