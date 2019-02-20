const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(celebritiesFromDb => {
      res.render('celebrities/index', {celebrities: celebritiesFromDb});
  })
  .catch(error => {
    console.log('Error => ', error);
  });
});

router.post('/celebrities', (req, res, next) => {
  const {name, occupation, catchphrase } = req.body;
  const newCelebrity = new Celebrity({ name, occupation, catchphrase})
  newCelebrity.save()
  .then((celebrity) => {
    res.redirect('/celebrities');
  })
  .catch((error) => {
    console.log('Error => ', error);
  });
});


router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new');
});


router.get('/celebrities/:id', (req, res, next) => {
  Celebrity.findById({_id: req.params.id})
    .then(celebrityFromDb => {
      //console.log(celebrityFromDb);
      res.render('celebrities/show', { celebrity: celebrityFromDb });
  })
  .catch(error => {
    console.log('Error => ', error);
  });
});

router.post('/celebrities/:id/delete', (req, res, next) => {
  Celebrity.findByIdAndRemove({_id: req.params.id})
  .then(response => {
    res.render('index');
  })
  .catch(error => {
    console.log('Error => ', error);
  })
});