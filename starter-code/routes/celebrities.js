const express = require('express');
const router = express.Router();
const Celebrities = require('../models/celebrities')


router.get('/celebrities/index', (req, res) => {
  Celebrities.find()
    .then(allcelebreties => {
      res.render('celebrities', { celebrities: allcelebreties })
    })
    .catch(error => {
      console.log('Error while retrieving the entries', error)
    })
})


router.get('/celebrities/celebrity/:celebrityId', (req, res) => {
  let celebrity = req.params.celebrityId
  Celebrities.findById(celebrity)
    .then(celebrity => {
      res.render('celebrities/celebrity', { celebrities: celebrity })
    })
    .catch(error => {
      console.log('error retrieving the celebrity details', error)
    })
})


router.get('/celebrities/add', (req, res) => {
  res.render('celebrities/add')
})

router.post('/celebrities/add', (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  const newCelebrity = new Celebrities({ name, occupation, catchPhrase });
  newCelebrity.save()
    .then((celebrity) => {
      res.redirect('/celebrities/index')
    })
    .catch((error) => {
      console.log(error);
    })
})

router.post('/celebrities/:id/delete', (req, res) => {
  let celebrity = req.params.id
  console.log(celebrity)
  Celebrities.findByIdAndDelete(celebrity)
    .then((celebrity) => {
      res.redirect('/celebrities/index')
    })
    .catch((error) => {
      console.log(error);
    })
})


module.exports = router;