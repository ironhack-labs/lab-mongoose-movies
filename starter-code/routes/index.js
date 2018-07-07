const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity');



/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* C(R)UD: Retrieve -> List all books */
router.get('/celebrities', (req, res, next) => {
  Celebrity.find({}).then(celebrities => {
    console.log(celebrities);
    res.render('celebrities/index', {celebrities});
  });
});

module.exports = router;
