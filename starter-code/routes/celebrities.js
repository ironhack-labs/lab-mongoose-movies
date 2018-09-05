const express = require('express');
const router  = express.Router();

const Celebrity = require("../models/celebrity-model.js");

router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then(celebrityResults => {
      res.locals.celebrityArray = celebrityResults;
      res.render("celebrities/index.hbs");
    })
    .catch(err => next(err));
});

router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new.hbs");
});

router.post("/celebrities", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;

  Celebrity.create({ name, occupation, catchPhrase })
    .then(celebrityDoc => {
      res.redirect("/celebrities");
    })
    .catch(err => next(err));
});

router.get("/celebrities/:id/delete", (req, res, next) => {
  const { id } = req.params;

  Celebrity.findByIdAndRemove(id)
    .then(celebrityDoc => {
      res.redirect("/celebrities");
    })
    .catch(err => next (err));
});

router.get("/celebrities/:id", (req, res, next) => {
  const { id } = req.params;

  Celebrity.findById(id)
    .then( celebrityDoc => {
      res.locals.celebrityItem = celebrityDoc;
      res.render("celebrities/show.hbs");
})
    .catch( err => next(err));
});



module.exports = router;