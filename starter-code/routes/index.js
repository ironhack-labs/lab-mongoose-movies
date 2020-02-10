const express = require('express');
const router  = express.Router();
const celebRouter = require('./celebrities');

/* GET home page */

router.use('/celebrities', celebRouter);


router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;
