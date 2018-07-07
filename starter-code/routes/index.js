const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity');



/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* C(R)UD: Retrieve -> List all celebrities */
router.get('/celebrities', (req, res, next) => {
  Celebrity.find({}).then(celebrities => {
    console.log(celebrities);
    res.render('celebrities/index', {celebrities});
  });
});
/* C(R)UD: Retrieve -> List the choosen celebrity */
router.get('/celebrities/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
  .then(celebrities => {
    console.log(celebrities);
    res.render('celebrities/show', {celebrities});
  });
});

module.exports = router;
