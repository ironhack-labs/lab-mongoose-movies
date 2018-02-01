const express = require('express');
const Celebrity = require('../models/celebrity');

const router  = express.Router();

router.get('/celebrities', (req, res, next) => {
    Celebrity.find({}, (err, celebrities) => {
        if (err) { return next(err); }
    
        res.render('celebrities/index', {
          celebrities: celebrities
        });
      });
});

router.get('/celebrities/:id', (req, res, next) => {
  Celebrity.findOne({id: celebrity.id}, (err, celebrities) => {
      if (err) { return next(err); }
  
      res.render('celebrities/show', {
        celebrities: celebrities
      });
    });
});

module.exports = router;