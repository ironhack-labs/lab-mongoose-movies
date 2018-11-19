const express = require('express');
const router  = express.Router();


router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res, next) => {
  res.render('celebrities/index');
});

module.exports = router;
