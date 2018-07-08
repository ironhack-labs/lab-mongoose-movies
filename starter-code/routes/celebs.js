const express = require('express');
const router = express.Router();
const Celebs = require('../models/Celebs');

/***** Celebs Create *****/

router.get('/', (req,res)=>{
  Celebs.find()
  .then(celebs=>{
    res.render('celebrities', {celebs})
  })
  .catch(err=>console.log(err))
});

router.post('/', (req,res)=>{
  Celebs.create(req.body)
  .then(celebs=>{
    res.redirect('/celebrities')
  })
})

router.get('/:id',(req, res)=>{
  let celebId = req.params.id
  Celebs.findById(celebId)
  .then(celeb => {res.render('celebsInfo', celeb)})
  .catch(err=>{console.log(err)});
})

router.post('/:id/delete',(req,res)=>{
  let celebId = req.params.id
  Celebs.findByIdAndRemove(celebId)
  .then(celebs => {res.redirect('/celebrities')})
})

router.get('/:id/edit',(req,res)=>{
  Celebs.findById(req.params.id)
  .then(celeb=>{res.render('celebsEdit', celeb)})
})

router.post('/:id/edit',(req,res)=>{
  Celebs.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then(celebs=>{res.redirect(`/celebrities/${req.params.id}`)})
})
module.exports = router;