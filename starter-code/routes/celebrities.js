const express = require('express');
const router  = express.Router();
const  celebModel= require('../models/celebrity');
const { response } = require('../app');

router.get('/celebrities', (req, res) =>{
    celebModel.find()
      .then((celebrities)=> res.render('celebrities/index.hbs', {celebrities}))
      .catch((err)=> console.log ('Error', err))
  })

router.get('/celebrities/new', (req, res) =>{
  res.render('celebrities/new.hbs')
})

router.post('/celebrities/new', (req, res) =>{
  celebModel.create(req.body)
    .then(()=>res.redirect('../celebrities'))
    .catch(()=>res.render('celebrities/new.hbs'))
});

router.post('/celebrities/:id/delete', (req, res) =>{
    celebModel.findByIdAndDelete(req.params.id)
      .then(()=> res.redirect('/celebrities'))
    });

      router.get('/celebrities/:id/edit', (req, res, next) => {
        celebModel.findById(req.params.id)
          .then((celebrity)=> res.render('celebrities/edit.hbs', {celebrity}))
          .catch(() => `Could not find the character in the database`)
      });
      
router.post('/celebrities/:id/edit', (req, res, next) => {
   let {name, occupation, catchPhrase} = req.body
   celebModel.findByIdAndUpdate(req.params.id, {$set: {name, occupation, catchPhrase}})
     .then(()=>res.redirect('../../celebrities'))
     .catch(()=>res.render('celebrities/edit.hbs', {error:true}))
      });
 


router.get('/celebrities/:id', (req, res) =>{
    celebModel.findById(req.params.id)
        .then((celeb) => res.render('celebrities/show.hbs', {celeb}))
        .catch((err)=> console.log ('Error', err))
})



  module.exports = router;
  router.get('/celebrities/new', (req,res)=>{
    CelebModel.find()
    .then((info)=>{
        res.render('celebrities/new.hbs',{info})
    CelebModel.create
    })
})
router.post('/celebrities/new', (req,res)=>{
    CelebModel.create(req.body)
        .then((celebs)=>{
            res.redirect('../celebrities')
        })
        .catch(()=>{
            res.render('celebrities/new.hbs')
        })
})