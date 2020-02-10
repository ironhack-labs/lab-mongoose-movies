const express = require('express');
const router  = express.Router();
const Celebrities = require('../models/Celebrities')

router
  .get('/celebrities', async (req, res) => {
    const celebrities = await Celebrities.find()
    console.log(celebrities)
    res.render('celebrities/index', {celebrities})
  })

module.exports = router;
