const express = require('express');	
const router  = express.Router();

const Celebrity = require("../models/Celebrity").default

router.get ("/", (req, res, next) => {
  Celebrity.find()
  .then (celebrities => {
    res.render ("celebrities/index", {celebrities})
  })
  .catch (err => {
    next(err)
  });
});

router.get ("/new", (req, res, next) => {
  res.render("celebrities/new");
});

router.post ("/new", (req, res, next) => {
  const {name, occupation, catchPhrase} = req.body;
  new Celebrity({name, occupation, catchPhrase})
  .save().then (()=> {
    res.redirect("/celebrities")
  })
  .catch (() => {
    res.render("celebrities/new")
  });
});

router.get ("/:id", (req, res, next) => {
  let celId = req.params.id;
  Celebrity.findById(celId)
  .then (celebrity => {
    res.render("celebrities/show", {celebrity})
  })
  .catch (err => {
    next(err)
  });
});

router.post ("/:id/delete", (req, res, next) => { 
  // Celebrity.findByIdAndRemove(req.params.id, () => res.redirect('/celebrities'));

  let celId = req.params.id;
  Celebrity.findByIdAndRemove(celId)
    .then (() => {
      res.redirect("/celebrities")
    })
    .catch(err => {
      next(err)
    });
});

module.exports = router;