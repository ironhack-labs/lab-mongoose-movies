const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/Celebrity.model');

// ITERATION 2: list the celebrities

router.get('/celebrities', (req, res, next) => {

  Celebrity.find()
    .then((celebrityList) => {
      res.render('celebrities/index', { celebrities: celebrityList })
    })
    // .next((err) => {
    //   return err
    // })
});

// ITERATION 3: see celebrity details

router.get('/celebrities/:theID', (req, res) => {

  Celebrity.findById(req.params.theID)
    .then(oneCelebrity => {
      console.log('Retrieved celeb from DB:', oneCelebrity)
      res.render('celebrities/show', { oneCelebrity: oneCelebrity })
    })
    // .next((err) => {
    //   return err
    // })
});

// ITERATION 4: adding new celebrities

router.get('/celebrities/new', (req, res) => {
  res.render('celebrities/new')
});

router.post('/addcelebrity', (req, res) => {
  console.log(req.body)
  Celebrity.create({ name: req.body.name, occupation: req.body.occupattion, catchPhrase: req.body.catchPhrase }).then(() => {
    res.redirect('/celebrities')
  })

})




module.exports = router;