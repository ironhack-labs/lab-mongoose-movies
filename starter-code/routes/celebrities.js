const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity'); 

router.get('/', (req, res, next) => {
  Celebrity.find()
  .then((celebrities) => {
    console.log(celebrities);
    res.render('celebrities/index', {
      celebrities
    });
  })
  .catch((error) => {
    console.log('An error happened while finding celebrities: ', error);
    next(error);
  })
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  Celebrity.findById(id)
  .then((celebrity) => {
    console.log(celebrity);
    res.render('celebrities/show', {
      celebrity
    });
  })
  .catch((error) => {
    console.log('An error happened while finding a celebrity: ', error);
    next(error);
  })
});

module.exports = router;
