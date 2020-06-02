const express = require('express');
const router  = express.Router();

const Celebrity = require("../models/celebrity.js");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


module.exports = router;
