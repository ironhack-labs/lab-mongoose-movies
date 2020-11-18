const { response } = require("express");
const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity");

router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then((celebritiesFromDB) => {
      res.render("celebrities/index", { celebrities: celebritiesFromDB });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/celebrities", (req, res, next) => {
  const { name, ocupation, catchPhrase } = req.body;
  Celebrity.create({ name, ocupation, catchPhrase })
    .then((celebrityCreated) => {
      res.redirect("/celebrities");
    })
    .catch((err) => {
      res.render("/celebrities/new");
      console.log(err);
    });
});

router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new");
});

router.get("/celebrities/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then((celebrityFromDB) => {
      res.render("celebrities/show", { celebrity: celebrityFromDB });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/celebrities/:id/delete", (req, res, next) => {
  console.log(req.params);
  const { id } = req.params;
  Celebrity.findByIdAndRemove(id)
    .then((celebrityRemoved) => {
      res.redirect("/celebrities");
    })
    .catch((err) => {
      console.log(err);
      next();
    });
});

module.exports = router;
