const express = require('express');
const router = express.Router();

const Celebrity = require("../models/Celebrity");

/* GET home page */
router.get('/celebrities', (req, res, next) => {
  Celebrity.find({})
    .then(celebsFromDB=>{
      console.log(celebsFromDB)
      res.render('celebrity-views/celebrities', {celebs: celebsFromDB});
    })
    .catch(err => next(err))
});

router.post('/celebrities', (req, res, next) => {
  const newCeleb = new Celebrity({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  });

  // Celebrity.create({
  //   name: req.body.name,
  //   occupation: req.body.occupation,
  //   catchPhrase: req.body.catchPhrase
  // })
  newCeleb.save()
    .then(responseFromDB =>{
      res.redirect("/celebrities")
    })
    .catch(err =>{
      console.error("Error, creating character", err);
      res.redirect("/celebrities/new")
    })
});

router.get('/celebrities/new', (req, res, next) => {
  res.render("celebrity-views/new")
});

router.get('/celebrities/:id/edit', (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(resultFromDB => {
      res.render("Celebrity-views/edit",{celeb: resultFromDB})
    })
    .catch(err => next(err));
});

router.post('/celebrities/:id/delete', (req, res, next) => {
  Celebrity.findByIdAndDelete(req.params.id)
    .then(res.redirect("/celebrities"))
    .catch(err => next(err));
});

router.get('/celebrities/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
  .then(celebFromDB => {
    res.render("celebrity-views/details", {celeb: celebFromDB})
  })
  .catch(err => next(err))
});

router.post('/celebrities/:id', (req, res, next) => {
  const updatedCeleb = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };

  Celebrity.findByIdAndUpdate(req.params.id, updatedCeleb)
  .then(resultFromDB => {
    res.redirect("/celebrities")
  })
  .catch(err => next(err))
});


module.exports = router;
