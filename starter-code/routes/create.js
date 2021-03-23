const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity.model");

router.get("/", (req, res, next) => {
  res.render("create");
});

router.get("/enter", (req, res, next) => {
  const newCelebrity = new Celebrity({
    name: req.query.celebName,
    occupation: req.query.occupation,
    catchphrase: req.query.catchphrase,
  });
  newCelebrity
    .save()
    .then((result) => {
      res.render("createconfirm",result);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
