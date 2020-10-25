const express = require('express');
const router  = express.Router();

/* GET home page */
console.log("I'm in index...")
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;
