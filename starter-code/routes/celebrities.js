const express = require("express");
const router = express.Router();

const Celebrity = require("../models/celebrity");

router.get("/", (req, res, next) => {
  Celebrity.find({})
    .then(celebrities => {
      res.render("celebrities/index", { celebrities });
    })
    .catch(console.error);
});

router.post("/", (req, res, next) => {
  const { name, occupation, catchPhrase, rating } = req.body;
  const celeb = new Celebrity({ name, occupation, catchPhrase, rating });

  celeb
    .save()
    .then(() => {
      res.redirect("/celebrities/");
    })
    .catch(console.error);
});

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  Celebrity.findById(id)
    .then(celebrity => {
      res.render("celebrities/show", celebrity);
    })
    .catch(console.error);
});

router.get("/create", (req, res, next) => {
  res.render("celebrities/create");
});

module.exports = router;
