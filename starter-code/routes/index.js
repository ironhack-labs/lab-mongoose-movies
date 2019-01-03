const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity.js");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      res.render("celebrities/index", { celebrityArray: celebrities });
    })
    .catch(error => {
      console.log(error);
    });
});

router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new");
});

router.post("/celebrities/new", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;

  const newCelebrity = new Celebrity({
    name: name,
    occupation: occupation,
    catchPhrase: catchPhrase
  });
  newCelebrity.save().then(() => {
    res.redirect("/celebrities");
  });
});

router.post("/celebrities/:celebrityId/delete", (req, res, next) => {
  Celebrity.findOneAndRemove({ _id: req.params.celebrityId })
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch(error => console.log(error));
});

router.get("/celebrities/:celebrityId/edit", (req, res, next) => {
  Celebrity.findOne({ _id: req.params.celebrityId })
    .then(document => {
      console.log("render edit");
      res.render("celebrities/edit", { celebrity: document });
    })
    .catch(error => {
      console.log(error);
    });
});

router.post("/celebrities/:celebrityId", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.update(
    { _id: req.params.celebrityId },
    { $set: { name: name, occupation: occupation, catchPhrase: catchPhrase } }
  )
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch(error => {
      console.log(error);
    });
});

router.get("/celebrities/:celebrityId", (req, res, next) => {
  Celebrity.findOne({ _id: req.params.celebrityId })
    .then(document => {
      res.render("celebrities/show", { celebrity: document });
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
