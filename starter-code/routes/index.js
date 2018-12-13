const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrities')


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.use((error, req, res, next) => {
  res.render("error");
});


module.exports = router;
