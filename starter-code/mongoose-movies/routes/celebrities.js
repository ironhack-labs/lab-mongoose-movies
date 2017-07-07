const express = require('express');
const Celebrity = require('../models/Celebrity');

const router = express.Router();

router.get('/celebrities', (req, res, next) => {
  // Iteration #2
  Celebrity.find({}, (err, celeb) => {
    if (err) {
      next();
      return;
    } else {
      obj = {
        celebrities: celeb
      };
      res.render('celebrities/index', obj);
    }
  });
});

router.get('/:id', (req, res, next) => {
  Celebrity.findById(req.params.id, (err, celeb) => {
    if(err){
      next();
      return;
    }
    res.render('celebrities/show', {
      celebrities: celeb
    });
  });
});

module.exports = router;
