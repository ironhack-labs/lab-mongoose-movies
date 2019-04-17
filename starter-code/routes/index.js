const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

// /celebrities

router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      res.render("celebrities/celebrities", {
        celebrities
      });
    })
    .catch(next);
});

router.post("/celebrities", (req, res, next) => {
  Celebrity.create({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  }).then(() => {
    res.redirect("/celebrities"); // Redirect to GET /celebrities
  });
});

router.get("/celebrities/:celebrityId", (req, res, next) => {
  Celebrity.findById(req.params.celebrityId).then(celebrityDetails => {
    res.render("celebrities/show", {
      celebrityDetails: celebrityDetails
    });
  });
});

//EDIT CELEB
router.get("/celebrities/:celebrityId/edit", (req, res, next) => {
  Celebrity.findById(req.params.celebrityId)
    .then(celebrity => {
      res.render("celebrities/edit", { celebrity });
    })
});

router.post("/celebrities/:celebrityId/edit", (req, res, next) => {
  Celebrity.findByIdAndUpdate(req.params.celebrityId, {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  }).then(() => {
    res.redirect("/celebrities/"+req.params.celebrityId);
  });
});

router.get("/celebrities/:celebrityId/delete", (req, res, next) => {
  Celebrity.findByIdAndDelete(req.params.celebrityId)
    .then(() => {
      res.redirect("/celebrities");
    })
});

module.exports = router;
