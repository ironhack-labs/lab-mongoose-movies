const express = require('express');

const router = express.Router();
const Celebrity = require('../models/celebrity.js');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then((celebrity) => {
      console.log(celebrity);
      res.render('celebrities/index', {celebrity});
    })
    .catch(err => {
      console.log()
  })
});

router.get('/celebrities/new' ,(req, res, next) => {
  res.render('celebrities/new');
})

router.post('/celebrities/new', (req, res, next) => {
  const {name, occupation, catchPhrase} = req.body;
  const newCelebrity = new Celebrity({name, occupation, catchPhrase});
  newCelebrity.save()
    .then(() => {
      res.redirect('/celebrities');
    })
})


router.get('/celebrities/:id', (req, res, next) => {
  Celebrity.findOne({_id: req.params.id})
    .then((celebrity) => {
      console.log(celebrity);
      res.render('celebrities/show', {celebrity});
    })
    .catch(err => {
      console.log()
  })
});

router.post('/celebrities/:id/delete', (req, res, next) => {
  Celebrity.findOneAndDelete({_id: req.params.id})
    .then(() => {
      res.redirect('/celebrities');
    })
  // res.send('delete post route');
})

module.exports = router;
