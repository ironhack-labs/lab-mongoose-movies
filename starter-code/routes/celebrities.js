const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity");

/* Listing the Celebrities */
router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then(celebritiesAll => {
      res.render("celebrities/index", { celebritiesAll });
    })
    .catch(error => {
      next(error);
    });
});

//Adding New Celebrities
router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new");
});

router.post("/celebrities/new", (req, res, next) => {
  const { name, occupation, catchPhase } = req.body;
  const newCelebrity = new Celebrity({ name, occupation, catchPhase });
  newCelebrity
    .save()
    .then(celebrityDoc => {
      res.redirect("/celebrities");
    })
    .catch(error => {
      res.render("/celebrities/new");
    });
});

//The Celebrity Details Page
router.get("/celebrities/:id", (req, res, next) => {
  let celebrityId = req.params.id;
  Celebrity.findOne({ _id: celebrityId })
    .then(celebrityDetail => {
      res.render("celebrities/show", { celebrityDetail });
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;
