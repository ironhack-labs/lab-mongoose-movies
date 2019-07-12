const express = require('express');
const router  = express.Router();
const Celeb = require('../model/Celebrity');
const Api = require('../model/ApiCeleb');
// const session    = require("express-session");
// const passport   = require("passport");
// const localStrategy = require ("passport-local").Strategy;
// const ensureLogin = require("connect-ensure-login");



router.get('/api/apiView',(req,res,next)=>{
  res.render('api/apiView');
})




//Get ALL
router.get('/api/api',(req,res,next)=>{
  Api.find()
  .then((listcelebs)=>{
  
      res.json(listcelebs);
  
  }).catch((err)=>{
      res.json(err);
  })
      
      });


//CREATE 

router.post('/api/api',(req,res,next)=>{
  

   Api.create({
    name:req.body.name,
    occupation:req.body.occupation,
    catchPhrase:req.body.catchPhrase

   }).then((response)=>{

         res.json(response);

     })
    .catch((err)=>{
        res.json(err);
    })
      
      });





module.exports = router;