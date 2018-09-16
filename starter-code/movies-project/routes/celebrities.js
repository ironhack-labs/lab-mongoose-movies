const router = require('./index');
const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');


router.get('/celebrities', (req, res, next) => {
  Celebrity.find({})
    .then(celebrities => {
      res.render('celebrities/index', { celebrities })
    })
    .catch(e => console.log(e))
})

router.get('/celebrities/:id', (req, res, next) => {
  Celebrity.findById({ _id: req.params.id })
    .then(celebrity => res.render('celebrities/show', { celebrity }))
    .catch(e => console.log(e))
})

module.exports = router;
