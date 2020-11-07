const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


/*router.get('/celebrities', async (req, res, next) => {
  const celebrity= await Celebrity.find()
  //next.catch(err => console.error('There was an error', err));
  res.render('celebrities/index', {celebrity})
});*/


module.exports = router;

