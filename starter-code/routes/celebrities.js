const express = require('express');
const router  = express.Router();
const celebrityModel=require("./../models/celebrity.js")


// console.log("i am inside celebities.js")
router.get('/', (req, res, next) => {
    celebrityModel.find()
      .then(dbRes => {
        // console.log(dbRes)
        res.render('celebrities/index', { celebrities: dbRes });
      })
      .catch(dbErr => {
        console.log(dbErr)
      })
  });


  router.get('/newceleb', (req, res, next) => {

    res.render('../views/celebrities/newceleb');
  });
  

  router.get('/:celebId', (req, res,next) => {
    console.log(req.params)
  
      celebrityModel.findById(req.params.celebId).then(dbRes => {
        // console.log(dbRes)
          res.render('celebrities/show', { celebrity: dbRes });
        })
        .catch(dbErr => {
          console.log("this is not working")
        })
    
    });


    router.post('/', (req, res,next) => {

      const newCelebrity=new celebrityModel({
        name:req.body.name,
        occupation:req.body.occupation,
        catchPhrase:req.body.catchPhrase
      })
      .save()
      .then((dbRes)=>{
        res.redirect('/celebrities');
      })
      .catch((error)=>{
          console.log("cannot save properly")
          res.redirect('/celebrities/newceleb')
      })
    
    });


    router.post('/:id/delete',  (req, res, next) => {
     celebrityModel.findByIdAndRemove({_id:req.params.id})
     .then((dbRes)=>{
       console.log("celebrity was deleted");
       res.redirect("/celebrities")
     })
     .catch((error)=>{
       console.log("there was errror deleting the data")

     }) 
     
    });

    router.post('/:id/edit', (req, res, next) => {
      celebrityModel.findById({_id:req.params.id})
      .then((dbRes)=>{
        console.log(dbRes)
        res.render('celebrities/edit', { celebrity: dbRes });
       
        // res.redirect("/celebrities")
      })
      .catch((error)=>{
        console.log("there was errror editing the data")
 
      }) 
      
     });
 

     router.post('/:id', (req, res,next) => {
      // const newCelebrity=new celebrityModel({
      //   name:req.body.name,
      //   occupation:req.body.occupation,
      //   catchPhrase:req.body.catchPhrase
      // })
      console.log(req.body)
      
      celebrityModel.findByIdAndUpdate(req.params.id, req.body)
      .then((dbRes)=>{
        res.redirect('/celebrities');
      })
      .catch((error)=>{
          console.log("cannot update properly")
          res.redirect('/celebrities/edit')
      })
    
      
      
    });


  module.exports = router;