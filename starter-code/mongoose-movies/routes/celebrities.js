/*jshint esversion: 6 */

const express = require('express');
const Celebrity = require('../models/celebrity');

const router  = express.Router();

router.get('/', (req, res, next) => {
  Celebrity.find({}, (err, celebrities) => {
     if (err) { return next(err); }
     else res.render('celebrities/index', {
       celebrities: celebrities
     });
   });
});

router.get('/:id', (req, res, next) =>{
  const celebId = req.params.id;
  Celebrity.findById(celebId, (err, celebrities) => {
    if (err) {return next(err);}
    else res.render('celebrities/show', {
      celebrities : celebrities
    });
  });
});

module.exports = router;
