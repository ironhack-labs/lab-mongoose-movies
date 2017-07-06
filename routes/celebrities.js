const express = require('express');
const Celebrity = require('../models/Celebrity');
const router = express.Router();

router.get('/', (req, res, next) => {
  Celebrity.find((err, celebrities) => {
    if(err){
      next();
      return err;
    } else {
      res.render('celebrities/index', {celebrities: celebrities});
    }
  });
});

router.get('/new', (req, res, next) => {
    res.render('celebrities/new');
});

router.post('/new', (req, res, next) => {
    let celebrityNew = new Celebrity({
      name: req.body.name,
      occupation: req.body.occupation,
      catchFrase: req.body.catchFrase
    });

    celebrityNew.save( (err, obj) => {
      if (err) {
        res.render('celebrities/new');
      } else {
        res.redirect('/celebrities');
      }
    });
});

module.exports = router;
