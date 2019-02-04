const express = require('express');
const router  = express.Router();



router.get('/celebrities.hbs',(req,res,next)=>{
  Celebrity.find()
  console.log(Celebrity)
  .then(celebrities =>{
    res.render('celebrities',{celebrities})
  })
  .catch(error => {
    console.log('Error is',error)
    next()
  })
})

router.get('/celebrities/:id',(req,res,next)=>{
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