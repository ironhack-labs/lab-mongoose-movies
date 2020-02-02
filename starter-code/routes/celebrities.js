const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity.model');

//1.Show all celebrities list
router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(celebritiesFromDB => {
      console.log('celebritiesFromDB: ', celebritiesFromDB);
      res.render('celebrities/index', { celebrities: celebritiesFromDB });
    })
    .catch(err => next(err));
});

//3.Add new celebrities
// |Needs to come before /celebrities/:theId, else will never get rendered
router.get('/celebrities/add', (req, res, next) => {
  //   console.log(req.body);
  res.render('celebrities/new');
});
//4.Post added celebrity and redirect to /celebrities
router.post('/celebrities/new', (req, res, next) => {
  //   const { name, occupation, catchPhrase } = req.body;
  //   Celebrity.create({ name, occupation, catchPhrase })
  Celebrity.create(req.body)
    .then(celebrityFromDB => {
      console.log('celebritiesFromDB: ', celebrityFromDB);
      res.redirect('/celebrities', { celebrity: celebrityFromDB });
    })
    .catch(err => next(err));
});

//2. Get celebrity details
router.get('/celebrities/:theId', (req, res, next) => {
  Celebrity.findById(req.params.theId)
    .then(celebrityFromDB => {
      console.log('celebritiesFromDB: ', celebrityFromDB);
      res.render('celebrities/show', { celebrity: celebrityFromDB });
    })
    .catch(err => next(err));
});

module.exports = router;
