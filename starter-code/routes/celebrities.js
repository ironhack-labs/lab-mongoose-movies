const express = require('express')
const router = express.Router()

const Celebrity = require('../models/celebrity')

router.get('/celebrities',(req,res)=>{
  Celebrity.find()
  .then(celebritiesFromDB => res.render('celebrities/index',{celebrities: celebritiesFromDB}))
  
  .catch(err=> console.log(`Error while displaying celebrities: ${err}`))
})

router.get('/celebrities/:id',(req,res,next)=>{
  Celebrity.findById(req.params.id)
  .then((celebrity)=>{
    res.render('celebrities/show',celebrity)

  })
  .catch((e)=> next(e))
  
})

router.get('/celebrities/new',(req,res,next)=>{
  res.render('celebrities/new')

})

router.post('/celebrities/new', (req, res, next) => {
  const celebrity = new Celebrity (req.body)
  celebrity.save()
  .then(c => res.redirect("/celebrities/index"))
  .catch(e => res.redirect("/celebrities/new"))
})




module.exports = router