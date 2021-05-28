const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity.model');

// list of all the celebrities

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(celebDB => res.render('celebrities/index', {celeb : celebDB}))
    .catch(error => console.log('error loading or fetching data from db', error))  
});

router.post('/celebrities', (req, res) =>{
  const {name, occupation, catchPhrase} = req.body
  console.log(name, occupation, catchPhrase)
  Celebrity.create({name, occupation, catchPhrase})
    .then(newEntryDB => {
      console.log(newEntryDB)
      res.redirect('/celebrities')
    })
    .catch(error => console.log('error while saving to DB', error))
})

router.get('/celebrities/new', (req, res) => {
  res.render('celebrities/new')
})

router.post('/celebrities/:id/delete', (req, res) => {
  const {id} = req.params
  Celebrity.deleteOne({_id : id})
    .then(celebDeleted => {
      console.log(celebDeleted)
      res.redirect('/celebrities')
    })
    .catch(error => console.log('error while deleting celeb from DB', error))
})

router.get('/celebrities/:id', (req,res)=> {
  const celebId = req.params.id;
  Celebrity.findById({_id : celebId})
    .then(celebDetails => res.render('celebrities/show', {details : celebDetails }))
    .catch(error => console.log('error while retrieving data from DB', error))
})

module.exports = router;