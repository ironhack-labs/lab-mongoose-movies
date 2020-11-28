const express = require('express');
const router  = express.Router();
const mongoose  = require('mongoose')

////////////
// ROUTES //
////////////

router.get('/', (req, res, next) => {
  res.render('index')
})

module.exports = router;
