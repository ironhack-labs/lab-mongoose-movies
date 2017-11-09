const express = require('express');
const Product = require('../models/celebrity');
const router  = express.Router();

router.get('/celebrities', (req,res) => {
  console.log(req);
});

module.exports = router;
