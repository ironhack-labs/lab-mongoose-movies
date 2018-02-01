const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity');

// READ 
router.get('/', (req, res, next) => {
  Celebrity.find().exec((err, celebrities) => {
    console.log(celebrities)
    if (err) { return next(err); }
    res.render('celebrities/index', {
      celebrities: celebrities
    });
  });
});

router.get('/:id', (req,res,next) => {
  const celebId = req.params.id;
  Celebrity.findById(celebId).exec((err,celebrity) => {
    res.render('celebrities/show', { celebrity: celebrity });
  })
})

module.exports = router;