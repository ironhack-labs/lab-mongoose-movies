const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity');

router.get('/celebrities', (req, res, next) => {
  
  Celebrity.find()
  .then( celebrities => {
    res.render('celebrities/index', { celebrities });
  })
  .catch( error => {
    console.log(error);
    next;
  });

});

router.post('/celebrities', (req, res, next) => {

  let { name, occupation, catchPhrase } = req.body

  const newCelebrity = new Celebrity({name, occupation, catchPhrase});

  newCelebrity.save()
  .then( celebrity => {
    res.redirect('/celebrities');
  })
  .catch( error => {
    res.render('celebrities/new', {error});
  })

})

router.get('/celebrities/new', (req, res, next) => {

  res.render('celebrities/new');

})

router.get('/celebrities/:celebrityId', (req, res, next) => {

  let celebrityId = req.params.celebrityId;
  Celebrity.findById(celebrityId)
  .then( celebrity => {
    res.render('celebrities/show', { celebrity });
  })
  .catch( error => console.log(error) );

});

router.post('/celebrities/:celebrityId', (req, res, next) => {

  let celebrityId = req.params.celebrityId;

  let { name, occupation, catchPhrase } = req.body

  Celebrity.update({_id: celebrityId}, {$set: {name, occupation, catchPhrase}})
  .then( celebrity => {
    res.redirect('/celebrities');
  })
  .catch( error => {
    res.render('celebrities/edit', {error});
  })

});

router.post('/celebrities/:celebrityId/delete', (req, res, next) => {
  
  let celebrityId = req.params.celebrityId;
  
  Celebrity.findByIdAndRemove(celebrityId)
  .then( celebrity => {
    let error = `Removed ${celebrity.name}`;
    console.log(error);
    res.redirect('/celebrities');
  })
  .catch( error => {
    console.log(error);
    res.render('celebrities/index', { error });
  })

})

router.get('/celebrities/:celebrityId/edit', (req, res, next) => {
  
  let celebrityId = req.params.celebrityId;

  Celebrity.findById(celebrityId)
  .then( celebrity => {
    res.render('celebrities/edit', { celebrity });
  })
  .catch( error => console.log(error) );

})



module.exports = router;
