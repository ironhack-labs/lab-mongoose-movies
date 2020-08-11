const express = require('express');
const router = express.Router();

const Celebrity = require('../models/Celebrity.model');

router.post('/celebrities/:id', (req, res, next) => {
    const { id } = req.params;
    const { name, occupation, catchPhrase } = req.body;
  
    Celebrity.findByIdAndUpdate(id, {name, occupation, catchPhrase}, {new: true})
      .then(res.redirect('/celebrities'))
      .catch(err => {
        next;
        console.log('Error updating celeb: ', err)
      })
  })
  router.get('/celebrities/:id/edit', (req, res, next) => {
    const { id } = req.params;
  
    Celebrity.findById(id)
      .then(celebToEdit  => {
        res.render('celebrities/edit', celebToEdit);
      })
      .catch(err => {
        next;
        console.log('Error retrieving celeb: ', err)
      })
  })
  router.post('/celebrities/:id/delete', (req, res, next) => {
    const { id } = req.params; 
  
    Celebrity.findByIdAndRemove(id)
      .then(res.redirect('/celebrities'))
      .catch(err => {
        next;
        console.log('Error deleting celeb from DB: ', err)
      })
  })
  router.get('/celebrities/new', (req, res, next) => {
    res.render('celebrities/new');
  })
router.get('/celebrities',(req,res)=> {
    Celebrity.find()
    .then(celebritiesFromDB => res.render('celebrities', { celebrities: celebritiesFromDB }))
    .catch(err => console.log(`Error while getting users from the DB: ${err}`));
});

router.get('/celebrities/:celebritiesId',(req,res) => {
    const { celebritiesId } = req.params;

    Celebrity.findById(celebritiesId)
        })
    .then(foundCelebrity => res.render('celebrities/show', {foundCelebrity}))
    .catch(err => console.log(`Err while getting a single post from the  DB: ${err}`));

    router.post('/celebrities/new', (req, res, next) => {
        const {name, occupation, catchphrase} = req.body;
        const celeb = {name: name, occupation: occupation, catchPhrase: catchphrase}
        const newCeleb = new Celebrity(celeb)
      
        newCeleb.save()
          .then(res.redirect('/celebrities'))
          .catch(err => res.redirect('/celebrities/new'))
      });
      

module.exports = router;