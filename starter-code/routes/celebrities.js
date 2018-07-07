const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity');


/* GET celebrities page */
router.get('/celebrities', (req, res, next) => {
  Celebrity.find({})
  .then(celebrities =>
  res.render('celebrities/index', {celebrities}))
  .catch(err => next())
});

/* GET celebrities id page */
router.get('/celebrities/:id', (req, res) => {
  Celebrity.findById({_id: req.params.id})
  .then(celebrities => res.render('celebrities/show',{celebrities}))
  .catch(err => next())
});

/* Create the celebrity in DB */
router.get('/celebrities/new', (req, res) => {
  res.render('celebrities/new');
});

router.post('/celebrities/new', (req, res, next) => {
  const {name, occupation, catchPhrase} = req.body;
  new Celebrity({name, occupation, catchPhrase})
  .save().then( celebrity => {
    console.log("Celebrity sucessfully created!");
    res.redirect('/celebrities');
  })
  .catch(err => next())
});

/* Delete the celebrity in DB */
router.post('/celebrities/delete/:id',(req,res) => {
  Celebrity.findByIdAndRemove(req.params.id, () => res.redirect('/celebrities'))
  .catch(err => next())
})



module.exports = router;