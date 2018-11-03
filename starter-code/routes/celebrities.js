
const celebrityModel = require('../models/Celebrity');
const express = require('express');
const router = express.Router();


// console.log(celebrityModel)

router.get('/celebrities', (req, res, next) => {
  // Get all the books from the db
  console.log('SUCCESS')
})

module.exports = router;

