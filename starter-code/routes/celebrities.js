const express = require('express');

const Celebrity = require('../models/celebrity');

const router = express.Router();

router.get('/celebrities/:id/edit', (req, res, next) => {
    const { id } = req.params;
    Celebrity.findById(id)
    .then(celebrityToEdit => {
      res.render ('celebrities/edit', celebrityToEdit);
    })
    .catch(error =>
      console.log(`Error while getting a single celebrity to edit: ${error}`));
  });
  
  router.post('/celebrities/:id/edit', (req, res) => {
    const { id } = req.params;
    const { name, occupation, catchPhrase } = req.body;
    Celebrity.findByIdAndUpdate(
      id, 
      { name, occupation, catchPhrase },
      { new: true }
    )
    .then(updatedCelebrity => res.redirect('/celebrities'))
    .catch(error =>
      console.log(`Error while updating a single celebrity: ${error}`))
  });

  router.post('/celebrities/:id/delete', (req, res, next) => {
    const { id } = req.params;
    Celebrity.findByIdAndRemove(id)
        .then(res.redirect('/celebrities'))
        .catch(error => console.log(`Error while deleting a celebrity: ${error}`));
   });
  
router.get('/celebrities/create', (req, res, next) => {
    res.render('celebrities/new');
   });

router.post('/celebrities/create', (req, res, next) => {
    const {name, occupation, catchPhrase} = req.body;
  
    Celebrity.create({name, occupation, catchPhrase})
    .then(() => res.redirect('/celebrities'))
    .catch(error => `Error while creating a new celebrity: ${error}`);
  });

router.get('/celebrities', (req, res, next) => {
 Celebrity.find()
 .then (allTheCelebritiesFromDB => {
   console.log(allTheCelebritiesFromDB);
   res.render('celebrities/index', {celebrities: allTheCelebritiesFromDB});
 })
 .catch(error =>
  console.log(`Error while getting the celebrities from the DB: ${error}`));
});

router.get('/celebrities/:id', (req, res, next) => {
    const { id } = req.params;
    Celebrity.findById(id)
    .then(foundCelebrity => {
      res.render ('celebrities/show', foundCelebrity);
    })
    .catch(error =>
      console.log(`Error while getting a single celebrity: ${error}`));
  });
module.exports = router;
