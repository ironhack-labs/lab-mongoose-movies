const express = require('express');
const Celebrity = require('../models/Celebrity');
const router  = express.Router();


router.get('/celebrities', (req, res, next) => {
  Celebrity.find({})
  .then(celebritiesFromDB => res.render('celebrities/index', { celebritiesFromDB }))
  .catch(error => console.log('Error found', error))
});

router.get('/celebrities/:id', (req, res, next) => {
    Celebrity.findById(req.params.id)
    .then(celebrity => res.render('celebrities/show', { celebrity }))
    .catch(error => console.log("Couldn't find the celebrity page", error))
})



module.exports = router;
