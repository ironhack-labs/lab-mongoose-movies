const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/celebrity.js');

/* GET show all celebrities */
router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(allCelebritiesFromDB => {
      // console.log('All Celebrities: ', allCelebritiesFromDB);
      res.render('celebrities/index', {celebrities: allCelebritiesFromDB});
    })
    .catch(next);
});


/* GET new celebrity */
router.get('/celebrities/new', (req, res) => {
  res.render('celebrities/new');
});


/* GET celebrities ID */
router.get('/celebrities/:id', (req, res, next) => {
  const celebrityId = req.params.id;

  Celebrity.findById(celebrityId)
    .then(celebrityFromDB => {
      res.render('celebrities/show', {celebrity: celebrityFromDB});
    })
    .catch(next);
});


/* GET edit celebrity */
router.get('/celebrities/:id/edit', (req, res, next) => {
  const celebrityId = req.params.id;

  Celebrity.findById(celebrityId)
    .then(celebrity => {
      res.render('celebrities/edit', {celebrity});
    })
    .catch(next);
});


/* POST new celebrity */
router.post('/celebrities/new', (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  
  const newCelebrity = new Celebrity({ name, occupation, catchPhrase });

  newCelebrity.save() 
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch(err => {
      console.log(err);
      res.redirect('celebrities/new');
    });

});

/* POST delete celebrity */

router.post('/celebrities/:id/delete', (req, res, next) => {
  const celebrityId = req.params.id;

  Celebrity.findByIdAndRemove(celebrityId)
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch(next);
});


/* POST edit celebrity */
router.post('/celebrities/:id', (req, res, next) => {
  const celebrityId = req.params.id;
  const { name, occupation, catchPhrase } = req.body;

  Celebrity.update({_id: celebrityId}, { $set: { name, occupation, catchPhrase }})
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch(next);
});


module.exports = router;
