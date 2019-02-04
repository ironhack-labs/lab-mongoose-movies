const express = require('express');
const router  = express.Router();
const mongoose = require('mongoose')
const Celebrities = require('../models/celebrity.js')

mongoose
  .connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
  .then(x => {
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

  // router.use(function (req, res, next) {
  //   console.log("Entro a middleware");
  //   next()
  // });


  router.get('/celebrities/new',(req,res,next)=>{
  
    res.render('celebrities/new')

  })


  router.post('/celebrities',(req,res,next)=>{

      const {name,occupation,catchPhrase} = req.body
    const newCelebritie = new Celebrities({
      name, 
      occupation,
      catchPhrase
    })

    newCelebritie.save()
    .then(()=> res.redirect('/celebrities'))
    .catch(()=> res.redirect('/celebrities/new'));
  })

  router.post('/celebrities/:id/delete',(req,res,next)=>{
   
    Celebrities.findByIdAndRemove(req.params.id)
    .then(()=> res.redirect("/celebrities"))
    // .catch(()=> next())
   
    

  })



  router.get('/celebrities/:id',(req, res, next) =>{
     const id = req.params.id
     Celebrities.findById(id,(err,data)=>{
       res.render('celebrities/show',{data})
     })
      })

  router.get('/celebrities/',(req, res, next) =>{
    Celebrities.find({},(err,data)=>{
      res.render('celebrities/index',{data})
    })
    })



 
    



  module.exports = router;