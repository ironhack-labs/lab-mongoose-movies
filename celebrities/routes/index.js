const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity.js");

/* GET home page */
router.get("/", (req, res, next) => {
  Celebrity.find().then(celebResult => {
    res.locals.celebArray = celebResult;
    res.render("celebrities/index.hbs");
  });
});

//-------------------ITERATION TWO ----------------------
//showing all celebrities

router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then(celebResult => {
      res.locals.celebArray = celebResult;
      res.render("celebrity-list.hbs");
    })
    .catch(err => next(err));
});

//-------------------ITERATION FOUR ------------------
//adding a new celeb

router.get("/celebrities/new", (req, res, next) => {
  res.render("new.hbs");
});

router.post("/process-new-celebrity", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;

  Celebrity.create({ name, occupation, catchPhrase })
    .then(celebDoc => {
      res.redirect("/celebrities");
    })
    .catch(err => next(err));
});

//----------------------  ITERATION THREE -------------------
//showing individual celeb

router.get("/celebrities/:celebId", (req, res, next) => {
  const { celebId } = req.params;

  Celebrity.findById(celebId)
    .then(celebResult => {
      res.locals.celebItem = celebResult;
      console.log(celebResult);
      res.render("celebrities/show.hbs");
    })
    .catch(err => next(err));
});

//------------------- ITERATION FIVE -------------------
//deleting a celeb

router.get("/celebrities/:celebId/delete", (req, res, next) => {
  const { celebId } = req.params;

  Celebrity.findByIdAndRemove(celebId)
    .then(celebDoc => res.redirect("/celebrities"))
    .catch(err => next(err));
});

//------------------- ITERATION SIX ---------------------
//updated the celeb

router.get("/celebrities/:celebId/edit", (req, res, next) => {
  const { celebId } = req.params;
  Celebrity.findById(celebId)
    .then(celebDoc => {
      res.locals.celebItem = celebDoc;
      res.render("celebrities/edit.hbs");
    })
    .catch(err => next(err));
});

router.post("/celebrities/:celebId/process-edit", (req, res, next) => {
  const { celebId } = req.params;
  const { name, occupation, catchPhrase } = req.body;

  Celebrity.findByIdAndUpdate(
    celebId,
    {
      $set: { name, occupation, catchPhrase }
    },
    { runValidators: true }
  )
    .then(celebDoc => {
      res.redirect(`/celebrities/${celebId}`);
    })
    .catch(err => next(err));
});

module.exports = router;
