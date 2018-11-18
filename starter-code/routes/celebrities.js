const express = require("express");
const router = express.Router();
const Celebrities = require("../models/celebrity");



router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new')
})

router.get('/celebrities', (req, res, next) => {
  Celebrities.find()
  .then(celebrities => res.render('celebrities/index', { celebrities }))
  .catch(err => { next(err) });
});

router.get('/celebrities/:id', (req, res, next) => {
  Celebrities.findById(req.params.id)
    .then(celebrities => res.render('celebrities/show', { celebrities }))
    .catch(err => { next(err) })
});

router.post('/celebrities', (req, res, next) => {
  const newCelebritie = new Celebrities()
  newCelebritie.name =req.body.name;
  newCelebritie.occupation = req.body.occupation;
  newCelebritie.catchPhrase = req.body.catchPhrase;
  newCelebritie.save()
  .then(celebrities => res.redirect("/celebrities"))
  .catch(celebrities => res.redirect("/celebrities/new"))
})

module.exports = router;
