const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then(celebrities => res.render("celebrities/index", { celebrities }))
    .catch(error => console.log(error));
});

router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new");
});

router.get("/celebrities/:id", (req, res, next) => {
  Celebrity.findById(req.params.id).then(celebrity => {
    res.render("celebrities/celebrity-detail", { celebrity });
  });
});

router.post("/celebrities/add", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const newCelebrity = new Celebrity({
    name,
    occupation,
    catchPhrase
  });

  newCelebrity.save().then(celebrity => res.redirect("/celebrities"));
});

router.post("/celebrities/:id/delete", (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then(() => res.redirect("/celebrities"))
    .catch(error => console.log(error));
});

router.get("/celebrities/:id/edit", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrity => {
      res.render("celebrities/edit-celebrity", { celebrity });
    })
    .catch(error => console.log(error));
});

router.post("/celebrities/:id/edit", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.findByIdAndUpdate(req.params.id, { name, occupation, catchPhrase })
    .then(() => res.redirect("/celebrities"))
    .catch(error => console.log(error));
});

module.exports = router;
