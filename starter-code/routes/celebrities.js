const express = require('express');
const router  = express.Router();

const Celebrity = require("../models/celebrity");

router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
  .then((celebrityDB) => {
    res.render("index", {celebrity: celebrityDB});
  })
  .catch((error) => {
    next();
  })

});


router.get("/celebrities/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
  .then((celebrity) => {
    res.render("show", {celebrity});
  })
  .catch((error) => {
    next()
    console.log(error)
  })
});

router.get("/celebrities/new", (req, res, next) => {
  res.render("new");
});

router.post("/celebrities/new", (req, res, next) => {
  const {name, occupation, catchPhrase} = req.body;
  Celebrity.save()
  .then(celebrity => res.redirect("/celebrities"))
  .catch((error) => {
    res.render("new");
    console.log(error)
  })
});

router.post("/celebrities/:id/delete", (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
  .then((celebrity) => {
    res.redirect("/celebrities");
  })
  .catch((error) => {
    next()
    console.log(error)
  })
});

router.get("/celebrities/:id/edit", (req, res, next) => {
  Celebrity.findById(req.params.id)
  .then((celebrity) => {
    res.render("edit", {celebrity});
  })
  .catch((error) => {
    next()
    console.log(error);
  })
});

router.post("/celebrities/:id/edit", (req, res, next) => {
  const {name, occupation, catchPhrase} = req.body;
  Celebrity.update(
    {id: req.params.id},
    {$set: {name, occupation, catchPhrase}},
    {new: true}
  )
  .then((celebrity) => {
    res.redirect("/celebrities");
  })
  .catch((error) => {
    next()
    console.log(error)
  })
});
