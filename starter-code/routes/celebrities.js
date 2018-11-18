const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity')

/* GET celebrities page */
router.get('/', (req, res, next) => {

  Celebrity.find()
  .then((celebrities)=>{
    res.render('celebrities',{celebrities});
  })
  .catch((error)=>{
    console.log(`Error finding celebrities ${error}`);
    // next();
  })
  
});

module.exports = router;
