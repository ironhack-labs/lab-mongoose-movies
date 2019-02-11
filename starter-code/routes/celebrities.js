const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity')


//routes
router.post("/:id/delete",(req,res,next)=>{
    Celebrity.findByIdAndRemove(req.params.id)
    .then(()=>res.redirect('/celebrities'))
    .catch(e=>next(e))
})
router.post('/new',(req,res,next)=>{
    Celebrity.create(req.body)
    .then(post=>{
      res.redirect('/celebrities')
    })
    .catch(e=>next(e))
  })

  router.get('/new', (req,res)=>{
    res.render('celebrities/new')
  });


router.get("/:id",(req,res,next)=>{
    Celebrity.findById(req.params.id)
    .then(celebrity=>res.render("celebrities/show",celebrity))
    .catch(e=>next(e))
})

router.get("/",(req,res,next)=>{
    
    Celebrity.find()
    .then(celebrities=>{
        // console.log(celebrities)
        res.render("celebrities/index",{celebrities})
    .catch(e=>next(e))
})
})

module.exports = router