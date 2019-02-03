const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/celebrity.js')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(allCelebritiesFromDB => {
      res.render('celebrities/index', {celebrities: allCelebritiesFromDB})
    })
    .catch(error => {
      console.log('Error', error)
    })
});

router.get('/celebrities/new', (req, res, next) =>{
  res.render('celebrities/new')
});

router.post('/celebrities/new', (req, res, next) =>{
  const {name, occupation, catchPhrase} = req.body;
  const newCelebrity = new Celebrity ({name, occupation, catchPhrase});

  newCelebrity.save()
  .then((celebrity) =>{
    res.redirect('/celebrities')
  })
  .catch((error) =>{
    res.redirect('celebrities/new')
  })
})

router.get('/celebrities/:celebrityId', (req, res, next) => {
  Celebrity.findById(req.params.celebrityId)
    .then(theCelebrity =>{
      res.render('celebrities/show', {show: theCelebrity})
    })
    .catch(error =>{
      console.log('Error with show celebrity', error)
    })
});

module.exports = router;
