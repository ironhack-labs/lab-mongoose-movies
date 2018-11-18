const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res, next) => {
  Celebrity.find({})
    .then(list => {
      console.log(list);
      res.render('celebrities', {list});
    })
    .catch(err => {
      res.redirect('/index')
    });

});

module.exports = router;
