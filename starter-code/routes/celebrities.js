const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrities.js");

router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then(data => {
      res.locals.celebrity = data;
      res.render("celebrities/index");
    })
    .catch(err => next(err));
});

router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/celebrity-new");
});

router.get("/celebrities/:_id", (req, res, next) => {
  Celebrity.findById(req.params)
    .then(data => {
      res.locals.celeb = data;
      res.render("celebrities/celebrity-detail");
    })
    .catch(err => next(err));
});

router.post("/process-form-", (req, res, next) => {
  const {name, occupation, catchPhrase} = req.body;
  Celebrity.create({name, occupation, catchPhrase})
    .then(res.redirect("/celebrities"))
    .catch(err => next(err));
});

router.get("/celebrities/delete/:_id", (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params)
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch();
});

router.get("/celebrities/:_id/edit", (req, res, next) => {
  Celebrity.findById(req.params)
    .then(data => {
      res.locals.celeb = data;
      res.locals.form = "edit";
      res.render("celebrities/celebrity-new");
    })
    .catch();
});

router.post("/process-form-edit/:_id", (req, res, next) => {
  const {name, occupation, catchPhrase} = req.body;
  Celebrity.findByIdAndUpdate(
    req.params,
    {$set: {name, occupation, catchPhrase}},
    {runValidators: true}
  )
    .then(data => {
      // res.json(data);
      res.redirect(`/celebrities/${data._id}`);
    })
    // next(err) skips to the error handler is "bin/www" (error.hbs)
    .catch(err => next(err));
});


module.exports = router;
