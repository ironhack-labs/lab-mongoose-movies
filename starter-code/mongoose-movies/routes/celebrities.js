const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

/* GET celebrities list */
router.get("/", (req, res, next) => {
  Celebrity.find()
    .then(celebrities => res.render("celebrities/index", { celebrities }))
    .catch(e => next(e));
});

/* Get new celebrity form */
router.get("/new", (req, res, next) => {
  res.render("celebrities/new")
});

  /* GET celebrity details */
  router.get("/:id", (req, res, next) => {
    Celebrity.findById(req.params.id)
      .then(celebrity => res.render("celebrities/show", { celebrity }))
      .catch(e => next(e));
  });

  /* POST add new celebrity */
  router.post("/", (req, res, next) => {
    const { name, occupation, catchPhrase } = req.body
    Celebrity.create({ name, occupation, catchPhrase })
      .then(() => {
        res.redirect('/celebrities')
      })
      .catch(error => res.render("celebrities/new", { error }));
  });
  /* POST delete celebrity */
router.post("/:id/delete", (req, res, next) => {
    Celebrity
      .findByIdAndDelete(req.params.id)
      .then(() => {
        res.redirect('/celebrities')
      })
      .catch(e => next(e));
  });

module.exports = router;