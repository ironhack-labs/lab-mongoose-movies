
const express = require('express');
const Celebrity = require('../models/celebrity')
const router = express.Router();


/* GET celebrities page. */
router.get('/' , function(req,res,next){
  Celebrity.find({})
  .then((celebrities)=>{
  res.render('celebrities/index', {celebrities});
  })
  .catch((error)=>{
  next(error);
  })
});

module.exports = router;

