const express = require('express');
const router  = express.Router();
require('dotenv').config();

console.log(process.env);

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;
