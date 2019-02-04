const express = require('express');
const router  = express.Router();
const mongoose = require('mongoose')
const moviesWork = require('../models/movies.js')

mongoose
  .connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
  .then(x => {
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

router.get('/movies',(req, res, next)=>{
console.log("Entro")
  moviesWork.find({},(err,data)=>{
    res.render('movies/index',{data})
  
  })

})

router.get('/movies/details/:id',(req,res,next)=>{
const id = req.params.id
  moviesWork.findById(id,(err,data)=>{
    res.render('movies/more',{data})
  })

})


router.get('/movies/new',(req,res,next)=>{
  res.render('movies/new')
})



router.post('/movies/',(req,res,text)=>{


  moviesWork.create(req.body)
  .then((err)=>{
    console.log("Superado")

  })


})

router.get('/movies/delete/:id',(req,res,next)=>{

  const id = req.params.id

  moviesWork.findByIdAndRemove(id)
  .then(()=> res.redirect('/movies'))


})




module.exports = router;