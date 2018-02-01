const express = require("express");
const Celebrity = require("../models/celebrity");
const router = express.Router();

//const mongoose = require("mongoose");
//mongoose.connect("mongodb://localhost/movies");

router.get("/", (req, res, next) => {
  Celebrity.find({}, (err, celebrityAdd) => {
    if (err) {
      return next(err);
    }
    res.render("celebrities/index", {
      celebrities: celebrityAdd
    });
  });
});

router.get("/:id", (req, res, next) => {
  const celebrityId = req.query.id;
  Celebrity.findById(celebrityId, (err, celebrity) => {
    if (err) {
      return next(err);
    }
    res.render("celebrities/show", {
      celebritiyId: celebrity
    });
  });
});

// The beginning of the 4th step

// router.get("/new", (req, res, next) => {
//   const celebrityId = req.query.id;
//   Celebrity.findById(celebrityId, (err, celebrity) => {
//     if (err) {
//       return next(err);
//     }
//     res.render("celebrities/new", {
//       celebritiyId: celebrity
//     });
//   });
// });

module.exports = router;
