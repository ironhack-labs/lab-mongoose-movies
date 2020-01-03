const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");
const mongoose = require("mongoose");

router.get("/", (req, res, next) => {
  Celebrity.find().then(celebrities => {
    res.render("celebrities/index", { celebrities });
  });
});

router.get("/new", (req, res, next) => {
  res.render("celebrities/new");
});

router.post("/new", (req, res, next) => {
  Celebrity.create({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  })
    .then(() => {
      res.redirect("/");
    })
    .catch(() => {
      res.redirect(
        "celebrities/new",
        alert("El artista no se ha creado correctamente")
      );
    });
});

router.get("/:celebritiesId", (req, res, next) => {
  Celebrity.findById(req.params.celebritiesId).then(celebrity => {
    res.render("celebrities/show", celebrity);
  });
});

router.get("/:celebritiesId/edit", (req, res, next) => {
  Celebrity.findById(req.params.celebritiesId).then(celebrity => {
    res.render("celebrities/edit", { celebrity });
  });
});

router.post("/:celebritiesId/edit", (req, res, next) => {
  Celebrity.findOneAndUpdate(req.params.celebritiesId, {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  }).then(celebrity => {
    res.redirect("/celebrities/" + celebrity._id);
  });
});

router.post("/:celebritiesId/delete", (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.celebritiesId).then(() => {
    res.redirect("/");
  });
});

module.exports = router;
