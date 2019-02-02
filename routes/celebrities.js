const express = require('express');

const router = express.Router();

/* GET celebrities page */

router.get('/', (req, res, next) => {
  console.log('Test celebrities route');
  res.render('celebrities');
});

module.exports = router;
