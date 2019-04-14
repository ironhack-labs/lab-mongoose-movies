const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity');

router.get('/', (req,res, next)=> {
  Celebrity.find()
  .then( celebrities => {
    console.log(celebrities);
    res.render('celebrities/index', {celebrities});
  })
  .catch((err)=>{
    console.log(err);
  }); 
});

module.exports = router;