const express = require('express');
const router  = express.Router();
const Celebrity = require ("../models/celebrity.js")

/* GET home page */
router.get('/', (req, res, next) => {
  Celebrity.find()
  .then(celebrities => {
    res.render('celebrities', {title: "All our celebrities", subtitle:"You decide who is the craziest...", celebrities});
  })
  .catch(err => next(err));
});

router.get('/new', (req, res, next) => {
  res.render('add_celebrity', {title: "Add a new celebrity", subtitle:"Please, be kind."});
});

router.post('/new', (req, res, next) => {
  const {name, occupation, catchPhrase} = req.body;
  const celeb = {name, occupation, catchPhrase};
  Celebrity.create(celeb)
    .then( newCeleb => res.redirect(`/celebrities/${newCeleb._id}`))
    .catch(err=> next(err));
});

router.get('/delete/:id', (req, res, next) => {
  const celeb_id = req.params.id;
  Celebrity.findByIdAndRemove(celeb_id)
    .then( () => res.redirect("/celebrities"))
    .catch( err => next(err));
});

router.get('/:id', (req, res, next) => {
  const celeb_id = req.params.id;
  Celebrity.findById(celeb_id)
  .then(celebrity => {
    res.render('celebrity_details', {title: celebrity.name, subtitle: celebrity.occupation, celebrity});
  })
  .catch(err => next(err));
});

module.exports = router;
