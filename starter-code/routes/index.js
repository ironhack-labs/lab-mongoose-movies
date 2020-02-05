const express = require('express');
const router = express.Router();
const celebrityModel = require("../models/celebrityModel");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


module.exports = router;