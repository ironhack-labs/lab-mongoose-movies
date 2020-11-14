const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/Celebrity.model');

router.get('/celebrities', (req, res, next) => {

    Celebrity.find()
    .then((celebritiesFindDB) => res.render("./celebrities/index",{celebritiesFindDB}))
    .catch((err) => next(err))
  });

router.get('/celebrities/new', (req,res) => {
    res.render("./celebrities/new")
    })

router.post('/celebrities/new', (req,res) => {
  const {name, occupation, catchPhrase} = req.body
  const newCel = new Celebrity({name, occupation, catchPhrase})
  newCel.save()
  .then(() => res.redirect("/celebrities"))
  .catch((err) => res.render("./celebrites/new"))
  })

router.post('/celebrities/:id/delete', (req, res, next) => {
  const { id } = req.params;
  Celebrity.findByIdAndRemove(id)
  .then ((datafromDB) => res.redirect("/celebrities"))
  .catch((err) => next(err))    
  });

router.get("celebrities/:id/edit", (req,res,next) => {
const { id } = req.params;
Celebrity.findById(id)
.then((celebFromDb) => res.render("./celebrites/edit"))
.catch((err) => next(err))
});

router.post("celebrities/:id/edit", (req,res,next) => {
  const { id } = req.params;
  const {name, occupation, catchPhrase} = req.body
  Celebrity.findByIdAndUpdate(id, {name, occupation, catchPhrase})
  .then((celebFromDb) => res.redirect("/celebrities"))
  .catch((err) => next(err))
  });

router.get('/celebrities/:id', (req, res, next) => {
    const { id } = req.params;
    Celebrity.findById(id)
    .then ((celebFromDb) => res.render("./celebrities/show", celebFromDb))
    .catch((err) => next(err))    
  });









module.exports = router;