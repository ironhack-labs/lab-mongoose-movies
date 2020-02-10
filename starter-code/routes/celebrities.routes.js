const express = require('express');

const router = express.Router();

const Celebrity = require('../models/celebrity');


router.get('/', (req, res, next) => {
  Celebrity.find()
  .then(celebrities => res.render('celebrities/index', {celebrities: celebrities}))
  .catch(err => console.log(`error getting the data from db ${err}`))
});


router.get('/new', (req, res, next) => {
  res.render('celebrities/new')
});


router.post('/', (req, res) => {
  Celebrity.create(req.body)
  .then(() => res.redirect('/celebrities'))
  .catch(err => {
    console.log(`error in form, try again ${err}`)
    res.redirect('celebrities/new')
  })
})



/* Celebrity.findByIdAndDelete(id)
Celebrity.findByIdAndUpdate(id, req.body) */






router.get('/:id', (req,res, next) => {
Celebrity.findById(req.params.id)
.then(celebID => res.render('celebrities/show', celebID))
.catch(err => console.log(`error getting the data from celebrity ${err}`))
});

module.exports = router;