const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity.js");

//CELEBRITIES PAGE
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

// CELEBRITY DETAIL PAGE
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

// ADD NEW CELEBRITY
router.get("/new", (req, res, next) => {
  res.render("celebrities/new");
});

router.post("/new", (req, res, next) => {
  const { name, occupation, catchphrase } = req.body;
  const newCelebrity = new Celebrity({ name, occupation, catchphrase });
  newCelebrity
    .save()
    .then(celebrity => {
      res.redirect("/celebrities/");
    })
    .catch(error => {
      console.log(error);
    });
});

//DELETE CELEBRITY
router.post("/:id/delete", (req, res, next) => {
  let celebrityId = req.params.id;
  Celebrity.findByIdAndRemove({ _id: celebrityId })
    .then(celebrity => {
      console.log(`celebrity deleted`);
    })
    .catch(error => {
      console.log(error);
      next();
    })
    .next(res.redirect("/celebrities/"));
});

module.exports = router;
