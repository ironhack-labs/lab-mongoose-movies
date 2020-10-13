const express = require('express');
const router  = express.Router();
const CelebrityModel = require('../models/celebrity.model')
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});
// router.get('/celebrities', (req, res, next) => {
//   res.render('celebrity.hbs');
// });

module.exports = router;
