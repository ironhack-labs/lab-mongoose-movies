const express = require('express');
const router  = express.Router();
const Celebrity = require ('../models/Celebrity')

router.get('/', (req, res, next) => {
  Celebrity.find()
  .then(celebrities =>{
    res.render('celebrities',{celebrities})
  })
  .catch(e=>next(e))
})

// Detail

router.get("/show/:id",(req,res,next)=>{
    const {id} = req.params
    Celebrity.findById(id)
    .then(celebrities=>{
    res.render("show",celebrities)
    }).catch(e=>next(e))
   })

// New

router.get('/new',(req,res,next)=>{
    res.render("new-form")
  })
  
  router.post ('/new',(req,res,next)=>{
    Celebrity.create(req.body)
    .then(celebrities =>{
      res.redirect('/celebrities')
    })
  })


// Delete 

router.get('/:id/delete',(req,res,next)=>{
    const {id} = req.params
    res.render('celebrities/')
  })
   router.post('/:id/delete', (req,res,next)=>{
    const {id} = req.params
    Celebrity.findByIdAndRemove(id)
      .then(celebrities=>{
        res.redirect('/celebrities')
      }).catch(e=>next(e))
  })


  // Edit

router.get ('/edit/:id',(req,res,next)=>{
    const {id} = req.params
    Celebrity.findById(id)
    .then (celebrities =>{
      res.render('edit-form',celebrities)
    }) .catch(e=>next(e))
  })
  
  router.post('/edit/:id',(req,res,next)=>{
    const {id} = req.params
    Celebrity.findByIdAndUpdate(id,{$set:req.body},{new:true})
    .then (celebrities =>{
      res.redirect(`/celebrities/show/${id}`)
    }) .catch(e=>next(e))
  })


 
module.exports = router;
