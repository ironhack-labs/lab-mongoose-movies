const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity.js");

router.get("/", (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      console.log(celebrities);

      res.render("celebrities/index", { celebrities });
    })
    .catch(error => {
      console.log(error);
      next();
    });
});

router.get("/:id", (req, res, next) => {
  let celebrityId = req.params.id;
  Celebrity.findOne({ _id: celebrityId })
    .then(celebrity => {
      console.log(celebrity);
      res.render("celebrities/show", { celebrity });
    })
    .catch(error => {
      console.log(error);
      next();
    });
});

router.get("/new", (req, res, next) => {
  res.render("celebrities/new");
});


module.exports = router;
