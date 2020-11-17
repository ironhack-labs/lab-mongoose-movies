const express = require("express");
const router = express.Router();

const Celebrity = require("../models/celebrity.model");

router.get("/", (req, res, next) => {
  Celebrity.find()
    .then((allCelebrities) =>
      res.render("celebrities/index", { allCelebrities })
    )
    .catch((err) => next(err));
});

router.get("/celebrities/:id", (req, res, next) => {
  const celebId = req.params.id;

  Celebrity.findById(celebId)
    .then((celebrity) => res.render("celebrities/show", celebrity))
    .catch((err) => next(err));
});

module.exports = router; //
