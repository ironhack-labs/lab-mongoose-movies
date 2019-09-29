const express = require('express');
const router  = express.Router();
const model = require("../models/celebrity")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index')
});

module.exports = router;