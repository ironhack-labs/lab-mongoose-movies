const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity');

/* GET home page */
router.get('/', (req, res, next) => {
  Celebrity.find()
  .then((celebrity) =>{
    res.render('celebrities', {celebrity});
  })
});

router.get('/new', (req, res, next) => {
  res.render('new');
});

router.post('/new', (req, res, next) => {
  const {name, occupation, catchPhrase} = req.body;
  Celebrity.create({name, occupation, catchPhrase})
  .then(()=>{
    res.redirect('/celebrities');
  })
  .catch(next)
});

router.get('/:id', (req, res, next) => {
  const {id} = req.params;
  Celebrity.findById(id)
  .then((celebrity) =>{
    res.render('celebrity', {celebrity});
  })
});

module.exports = router;