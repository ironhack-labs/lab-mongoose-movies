const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  console.log('first call of index works')
  res.render('index');
});

module.exports = router;
