const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrities')


router.get('/',(req,res,next)=>
{
  
  Celebrity.find()
 
  .then(celebrities =>
  {
    res.render('celebrities',{celebrities})
  })
  .catch(error => 
  {
    console.log('Error is',error)
    next()
  })
})

router.get('/:id',(req,res,next)=>{
  celebrities.findById(req.params.id)
  .then(celebrities =>{
    res.render('celebrities/show',{celebrities})
  })
  .catch(error => {
    console.log(error)
    next()
  })
})

module.exports = router;