const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity.js");

router.get("/new", (req, res, next) => {
  res.render("celebrities/new");
});

router.post("/new", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({ name, occupation, catchPhrase })
    .then(celebrity => {
      res.redirect("/celebrities");
    })
    .catch(e => console.log(e));
});

router.get("/", (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      res.render("celebrities/index", { celebrities });
    })
    .catch(next);
});

router.get("/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrity => {
      res.render("celebrities/show", { celebrity });
    })
    .catch(next);
});

router.get("/:id/edit", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrity => {
      res.render("celebrities/edit", { celebrity });
    })
    .catch(next);
});

router.post("/:id", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.findByIdAndUpdate(req.params.id, {
    name: name,
    occupation: occupation,
    catchPhrase: catchPhrase
  })
    .then(celebrity => {
      let stringId = encodeURIComponent(celebrity._id);
      res.redirect("/celebrities/" + stringId);
    })
    .catch(next);
});

router.post("/:id/delete", (req, res, next) => {
  const { celebrityId } = req.body;
  Celebrity.findByIdAndRemove(celebrityId)
    .then(deleted => {
      res.redirect("/celebrities");
    })
    .catch(next);
});

module.exports = router;
