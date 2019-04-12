const express = require('express');
const router =  express.Router();
const Celebrity = require('../models/celebrity')

router.get('/celebrities', (req, res, next) => {
  console.log('in celebrities');
  Celebrity.find()
    .then(celebrities => res.render('celebrities/index', {celebrities}))
    .catch(err => next(err))
});



router.get('/celebrities/:id', (req, res, next) => {
  console.log('in celebrities');
  Celebrity.findOne()
    .then(celebrities => res.render('celebrities/show', {celebrities}))
    .catch(err => next(err))
});
router.get('/celebrities/new', (req, res, next) => {
 // res.render('celebrities')
});
// router.post('/celebrities/new', (req, res, next) => {
//   const {name, occupation, catchPhrase} = req.body;
//   const newCelb = new Celb ({name, occupation, catchPhrase});
//   newCelb.save () => {
//     .then(Celb => res.redirect('/celebrities', {celebrities}))
//     .catch(err => res.render('celebrities/new', {celebrities})) 
//   }
// });
 module.exports = router;