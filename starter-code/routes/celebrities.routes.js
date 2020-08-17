  const express = require('express');
  const router = express.Router();

  //Iteration #1: The Celebrity Model
  const Celebrity = require('../models/Celebrity.model');

  //Iteration #2: Listing Our Celebrities and getting home page
  router.get('/celebrities', (req, res) => {
    
    Celebrity
    .find ()
    .then(celebrities => res.render('celebrities/index', {celebrities}))
    .catch(err => console.log(`Error while getting celebrities from the DB: ${err}`));
  })
  //Iteration #3: The Celebrity Details Page
  router.get('/celebrities/show/:id', (req, res) => {
    
    Celebrity
      .findById(req.params.id)
      .then(oneCelebrity => res.render('celebrities/show', oneCelebrity))
      .catch(err => console.log(`Error while getting celebrities from the DB: ${err}`))
  
  })
  //Iteration #4: Adding New Celebrities
  router.get('/celebrities/new', (req, res) => { res.render('celebrities/new') })
  router.post('/celebrities/new', (req, res) => {
    
    const { name, occupation, catchPhrase } = req.body
    
    Celebrity
      .create({ name, occupation, catchPhrase })
      .then( () => res.redirect('/celebrities'))
      .catch(err => console.log(`Error while adding new celebrities from the DB: ${err}`))
    
  })
  //Iteration #5: Deleting Celebrities
  router.post('/celebrities/:id/delete', (req, res) => {

    Celebrity
      .findByIdAndRemove(req.query.id)
      .then(() => res.redirect('/celebrities'))
      .catch(err => console.log(`Error while deleting celebrities from the DB: ${err}`))

  })

  //Iteration #6 (Bonus): Editing Celebrities
  router.get('/celebrities/edit', (req, res) => {

    Celebrity
      .findById(req.query.celebrityId)
      .then(theCelebrity => res.render('celebrities/edit-form', theCelebrity))
      .catch(err => console.log(`Error while editing celebrities from the DB: ${err}`))

  })
  router.post('/celebrities/edit/:celebrityId', (req, res) => {

    const {name, occupation, catchPhrase } = req.body

    Celebrity
      .findByIdAndUpdate(req.params.celebrityId, {name, occupation, catchPhrase }, {new: true})
      .then(() => res.redirect('/celebrities'))
      .catch(err => console.log(`Error while editing celebrities from the DB: ${err}`))

  })

  module.exports = router;
