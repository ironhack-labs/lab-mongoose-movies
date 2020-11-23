const express = require('express');
const router  = express.Router();
const CeleModel = require('../models/Cele.model');
const Cele = require('../models/Cele.model')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;
