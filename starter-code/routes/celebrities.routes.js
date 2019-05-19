const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity')



/* GET home page */
router.get('/', (req, res, next) => {
  Celebrity.find()
  .then(celebrities => {
    console.log(celebrities)
    res.render('celebrities/index', {
      celebrities
    });
  })
  .catch(err=>{
    next()
    return err
  })
});

module.exports = router;
