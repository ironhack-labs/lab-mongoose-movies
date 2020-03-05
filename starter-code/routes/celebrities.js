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

router.post('/:id/delete', (req, res, next) => {
  const { id } = req.params
  Celebrity.findByIdAndRemove(id)
  .then(()=>{
    res.redirect('/celebrities');
  })
  .catch(next)
});

router.get('/:id/update', (req, res, next) => {
  const { id } = req.params
  Celebrity.findById(id)
  .then((celebrity)=>{
    res.render('update', {celebrity});
  })
  .catch(next)
});

router.post('/:id', (req, res, next) => {
  const { id } = req.params;
  const {name, occupation, catchPhrase} = req.body;
  Celebrity.findByIdAndUpdate(id, {
    name,
    occupation,
    catchPhrase
  })
  .then(() =>{
    res.redirect('/celebrities');
  })
});

router.get('/:id', (req, res, next) => {
  const {id} = req.params;
  Celebrity.findById(id)
  .then((celebrity) =>{
    res.render('celebrity', {celebrity});
  })
});

module.exports = router;