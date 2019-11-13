const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/celebrities", (req, res, next) => {
  Celebrity.find({})
    .then(documents => {
      res.render("celebrities/index.hbs", { celebrities: documents });
    })
    .catch(err => {
      console.log(err);
      next();
    });
});

router.get("/celebrities/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(documents => {
      res.render("celebrities/show.hbs", { celebrities: documents });
    })
    .catch(err => {
      console.log(err);
      next();
    });
});

router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new.hbs");
});

router.post("/celebrities", (req, res, next) => {
  Celebrity.create({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  })
    .then(documents => res.redirect("/celebrities"))

    .catch(err => {
      res.redirect("/celebrities/new");
    });
});

router.post("/celebrities/:id/delete", (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then(document => res.redirect("/celebrities"))
    .catch(err => next());
});

router.get("/celebrities/:id/edit", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(document => res.render("celebrities/edit.hbs"), {
      celebrities: documents
    })
    .catch(err => next());
});

router.post("/celebrities/:id", (req, res, next) => {
  Celebrity.create({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  })
    .then(documents => res.redirect("/celebrities"))

    .catch(err => {
      res.redirect("/celebrities/new");
    });
});

module.exports = router;
