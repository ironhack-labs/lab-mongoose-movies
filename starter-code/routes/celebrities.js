const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity')

/* GET celebrities page */
router.get('/',(req, res)=>{
  Celebrity.find().then((celebs)=>{
    res.render('./celebrities/index',{celebs})
  })
  .catch(error=>{
    res.send(error)
  })
})

module.exports = router;
