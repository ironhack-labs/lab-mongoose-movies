const express = require("express");
const Celeb = require("../models/celebrity");
// require the Drone model here
const router = express.Router();

router.get("/", (req, res, next) => {
  Celeb.find({}, (err, celebs) => {
    if (err) {
      return next(err);
    }
    res.render("celebrities/index", { celebs: celebs });
  });
});

module.exports = router;
