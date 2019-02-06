const express = require("express");

const router = express.Router();

const Celebrity = require("../models/celebrity-model");

router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then(celebrityDoc => {
      console.log("celebrityshow");
      res.locals.celebrities = celebrityDoc;
      res.render("celebrities/index.hbs");
    })
    .catch(err => {
      next(err);
    });
});
router.get("/celebrities/addCeleb", (req, res, next) => {
  res.render("celebrities/addCeleb.hbs");
});

router.post("/process-celeb", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({ name, occupation, catchPhrase })
    .then(celebDoc => {
      res.redirect(`/celebrities`);
    })
    .catch(err => {
      next(err);
    });
});

router.get("/celebrities/:celebId", (req, res, next) => {
  const { celebId } = req.params;
  Celebrity.findById(celebId)
    .then(celebrityDoc => {
      res.locals.celebItem = celebrityDoc;
      res.render("celebrities/celebrity-details.hbs");
    })
    .catch(err => {
      next(err);
    });
});

router.get("/celebrities/:celebId/delete", (req, res, next) => {
  const { celebId } = req.params;
  Celebrity.findByIdAndRemove(celebId)
    .then(celebDoc => res.redirect("/celebrities"))
    .catch(err => next(err));
});

module.exports = router;
