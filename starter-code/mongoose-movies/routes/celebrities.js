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

  /* GET edit celebrities*/
  router.get("/:id/edit", (req, res, next) => {
    console.log(req.params.id)
    Celebrity.findById(req.params.id)
      .then(celebrity => res.render("celebrities/edit", celebrity ))
      .catch(e => next(e));
  });

  /* GET celebrity details */
  router.get("/:id", (req, res, next) => {
    Celebrity.findById(req.params.id)
      .then(celebrity => res.render("celebrities/show", celebrity ))
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
  
  /* POST edit celebrity */
  router.post("/:id", (req, res, next) => {
    const { name, occupation, catchPhrase } = req.body
    Celebrity
      .findByIdAndUpdate(req.params.id,{ name, occupation, catchPhrase })
      .then(() => {
        res.redirect('/celebrities')
      })
      .catch(e => next(e));
  });

module.exports = router;