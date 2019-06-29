const express = require('express');
const router  = express.Router();
const Celebrity = require("../models/celebrity")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities/index', (req, res, next) => {
  Celebrity
  .find()
  .then((allCelebrities) =>{
    res.render('celebrities/index',{allCelebrities});
  }).catch(error => {
    console.log(error);
  })
});

router.get('/celebrities/newo', (req, res, next) => {
  console.log("chachi")
    res.render('celebrities/newo')
});

router.post('/celebrities/new_celebrity', (req, res, next) => {
  Celebrity
  .create({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase : req.body.catchPhrase
  })
  .then(newCeleb =>{
    res.redirect("/celebrities/index")
  }).catch(error => res.redirect("/celebrities/new"))
});


router.get('/celebrities/:id', (req, res, next) => {
  Celebrity
  .findById(req.params.id)
  .then(celeb =>{
    res.render("celebrities/show", {celeb})
  }).catch(error => {
    console.log(error);
  })
});

router.post('/celebrities/:id/delete', (req, res, next) => {
  console.log(req.params.id)
  Celebrity
  .findByIdAndDelete(req.params.id)
  .then(delCeleb =>{
    res.redirect("/celebrities/index")
  }).catch(error => {
    next(error);
  })
});


module.exports = router;
