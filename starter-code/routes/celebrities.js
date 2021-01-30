const express = require('express');

const Celebrities = require('../models/Celebrity.model')

const router = express.Router();

// SHOW ALL CELEBS
router.get('/celebrities', (req, res, next) => {
  Celebrities.find()
  .then(allCelebrities => {
    res.render('celebrities/index.hbs', { celebritiesList: allCelebrities })
  })
  .catch(error => console.log(error));
});


// NEW CELEB
router.get('/celebrities/new', (req, res, next) => res.render('celebrities/new.hbs'));
 

router.post('/celebrities/new', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrities.create({ name, occupation, catchPhrase })
    .then(celebritiesFromdb => {
      console.log(`New CELEB created: ${celebritiesFromdb.name}.`)
      res.redirect('/celebrities/')
    })
    .catch(error => `Error while creating a new celeb: ${error}`);
});


//SHOW SPECIFIC CELEB

router.get('/celebrities/:id/', (req, res, next) => {
    const { id } = req.params;
   Celebrities.findById(id)
   .then(celebrityToShow => {
     res.render('celebrities/show.hbs', celebrityToShow);
   })
   .catch(error => console.log(`Error while getting a single celeb : ${error}`));
 });
 


// EDIT CELEB

router.get('/celebrities/:id/edit', (req, res, next) => {
    const { id } = req.params;
   Celebrities.findById(id)
   .then(celebtoEdit => {
     res.render('celebrities/edit.hbs', celebtoEdit);
   })
   .catch(error => console.log(`Error while getting a single celeb for edit: ${error}`));
 });
 
 
 router.post('/celebrities/:id/edit', (req, res, next) => {
     const { id } = req.params;
     const { name, occupation, catchPhrase } = req.body;
    
     Celebrities.findByIdAndUpdate(id, { name, occupation, catchPhrase }, { new: true })
       .then(uptadedCelebrity => res.redirect('/celebrities'))
       .catch(error => console.log(`Error while updating a single celeb: ${error}`));
   });
 

   // DELET CELEB

   router.post('/celebrities/:id/delete', (req, res, next) => {
    const { id } = req.params;
    
    Celebrities.findByIdAndDelete(id)
    .then(deletedCelebrity => res.redirect('/celebrities'))
    .catch(error => console.log(`error while deleting: ${error}`));
});


module.exports = router;

