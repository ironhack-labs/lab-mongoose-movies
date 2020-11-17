const express = require('express');
const Celebrity = require('../models/Celebrity.model');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('celebs/index');
});


 
module.exports = router;
