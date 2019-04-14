const express = require('express');
const router  = express.Router();
//
const Celebrity = require('../models/celebrity');

router.get('/', (req, res, next) => {
  Celebrity.find({})
  .then((celebrities)=>{
    //res.json(celebrities);
    res.render('celebrities/index', {celebrities});
  })
  .catch((err)=>{
    console.log(err);
  })
});

router.get('/new', (req, res, next) => {
  const data = {
    action: "new"
  }
  res.render('celebrities/new', data);
});

router.post('/', (req, res, next) => {  
  const { name, occupation, catchPhrase } = req.body;
  const newCelebrity = new Celebrity({ name, occupation, catchPhrase })
  newCelebrity.save()
    .then((celebrity) => {
      res.redirect('/celebrities');
    })
    .catch((error) => {
      console.log(error);
    })

});

router.get('/:celebrityId', (req, res, next) => {
  var id = req.params.celebrityId;
  console.log(id);
  Celebrity.findById(id)
  .then((celebrity)=>{
    res.render('celebrities/show', celebrity);
  })
  .catch((err)=>{
    console.log(err);
  })
});


router.post('/:celebrityId/delete', (req, res, next) => {
  var id = req.params.celebrityId;
  console.log(id);
  Celebrity.findByIdAndRemove(id)
  .then((celebrity)=>{
    res.redirect('/celebrities');
  })
  .catch((err)=>{
    console.log(err);
  })
});

module.exports = router;