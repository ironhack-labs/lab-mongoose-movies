const express = require('express');
const router = express.Router();

const Celebrity = require('../models/Celebrity.model');

router.get('/celebrities', (req, res) => {
    Celebrity.find()
    .then(availableCelebrities => {
        console.log("===============", availableCelebrities)
        res.render('celebrities/index', { celebrity: availableCelebrities })
    })
    .catch(err => console.log(`Err while displaying celebrities page: ${err}`));

});

router.get('/celebrities/:id/description', (req, res) => {
    Celebrity.findById(req.params.id)
    .then(foundCelebrity => {
        res.render('celebrities/show', { celebrity: foundCelebrity})
    })
    .catch(err => console.log(`Err while getting the celebrity from the  DB: ${err}`));
})

router.get('/celebrities/new', (req, res) => res.render('celebrities/newCelebrity'))

router.post('/newCeleb', (req, res) => {
    Celebrity.create(req.body)
    .then(newCelebrity => {
        res.redirect('/celebrities')
    })
})
router.post('/celebrities/:celebId/delete', (req, res) => {
    Celebrity.findByIdAndRemove(req.params.celebId)
      .then(() => res.redirect('/celebrities'))
      .catch(err => console.log(`Err while deleting celebrity from the  DB: ${err}`));
  });

module.exports = router;