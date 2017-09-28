const express = require("express");
const Celebrity = require("../models/celebrities");
const router = express.Router();

router.get("/celebrities", (req, res, next) => {
  Celebrity.find({}, (err, celebrities) => {
    if (err) return next(err);
    res.render("celebrities/index", {
      celebrities
    });
  });
});

router.get("/celebrities/:id", (req, res, next) => {
  const celebId = req.params.id;
  Celebrity.findById(celebId, (err, celebrity) => {
    console.log(celebrity);
    res.render("celebrities/show", {
      celebrity
    });
  });
});

router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new");
});



// router.post

module.exports = router;
