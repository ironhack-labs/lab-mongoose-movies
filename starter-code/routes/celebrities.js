const express = require('express');
const router  = express.Router();
// const Celebrities = requires('../models/Celebrity.js');

router.get('/celebrities',(req,res) => {
    res.render('celebrities');
  })

  module.exports = router;