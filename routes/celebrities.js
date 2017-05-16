const express = require('express');

const Celebrity = require('../models/celebrity.js');

const router =express.Router();

router.get('/celebrities',(req, res, next) =>{
  Celebrity.find((err, celebrities) =>{
    if (err) {
      next(err);
      return;
    }
    res.render('celebrities/index', {
      celebrities: celebrities
    });
  });
});

router.get('/celebrities/:id',(req, res, next) =>{
  const celebrityId= req.params._id;

  Celebrity.findById(celebrityId, (err, celebDoc) =>{
    if(err) {
    next (err);
    return;
  }

  res.render('/celebrity/show',{
    celebrity:celebDoc
  });
  });
});



module.exports = router;
