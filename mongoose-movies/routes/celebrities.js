const express = require('express');
const router  = express.Router();

const Celebrity = require("../models/celebrity.js");


router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new.hbs");
});


router.post("/process-celebrity", (req, res, next) => {
  // res.send(req.body);
  const { name, occupation, catchPhrase } = req.body;

  Celebrity.create({name, occupation, catchPhrase})
  .then((oneCeleb) => {
    res.redirect("/celebrities/index");
  })
  .catch((err) => {
    next(err);
  })
})

router.post("/celebrities/:celebId/delete", (req, res, next) => {
  const {celebId} = req.params;
  Celebrity.findByIdAndRemove(celebId)
  .then((celebItem) => {
    res.redirect("/celebrities/index");
  })
  .catch((err) => {
    next(err);
  })
})


router.get("/celebrities/:id/edit", (req, res, next) => {
  const {id} = req.params;

  Celebrity.findById(id)
  .then((celeb) => {
    res.locals.celeb = celeb;
    res.render("celebrities/edit.hbs");
  })
  .catch((err) => {
    next(err);
  })
});

router.post("/:celebId/", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const { celebId } = req.params;
  Celebrity.findByIdAndUpdate(
    celebId,
    {$set: {name, occupation, catchPhrase} },
    {runValidators: true}
  )
  .then(() => {
    res.redirect(`celebrities/${celebId}`);
  })
  .catch((err) => {
    next(err);
  })
})

router.get('/celebrities/index', (req, res, next) => {
  Celebrity.find()
  .then((celebResults) => {
    res.locals.celebsArray = celebResults;
    res.render('celebrities/index.hbs');
  })
  .catch((err) =>{
    next(err)
  })
})

router.get('/celebrities/:celebId', (req, res, next) => {
  const { celebId } = req.params;
  Celebrity.findById(celebId)
  .then((celebDoc) => {
    res.locals.celebItem = celebDoc;
    res.render("celebrities/show.hbs")
  })
  .catch((err)=> {
    next(err);
  })
})

module.exports = router;