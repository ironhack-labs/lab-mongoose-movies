const express = require('express');
const router  = express.Router();
const Celebrity = require("../models/celebrity");

/* GET home page */
router.get('/', (req, res, next) => {
  Celebrity.find()
  .then(celebrities => {
    console.log(celebrities);
    res.render('celebrities/index', {celebrities});  
  })
});

module.exports = router;