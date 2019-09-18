const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});
router.get('/celebrity', (req, res, next) => {
  Celebrity.find({}).then(celebs =>{
    const hbsObj = {
      celebrity: celebs
    }
    res.render('celebrity', hbsObj);
  })
});

module.exports = router;
