const express = require('express');
const router  = express.Router();

const celebrities = require('../models/celebrity.js')

/* GET celebrities page */
router.get('/celebrities', (req, res, next) => {

  res.render('celebrity/index');
});

module.exports = router;
