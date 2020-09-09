const express = require('express');
const router = express.Router();

const Celebrity = require('../models/celebrity');


router.get('/', (req, res, next) => {
    Celebrity.find()
        .then(allcelebritiesFromDB => {
            res.render('celebrities/index', {celebrities:allcelebritiesFromDB})
        })
        .catch(err => {
            next(err)
        })
    
})

router.get('/create',(req,res,next)=>{
    res.render('celebrities/new');
})

router.get('/:id',(req,res,next)=>{
    console.log("HI");
    Celebrity.findById(req.params.id)
    .then(celebrity => {
        console.log({celebrity});
        res.render('celebrities/show',{celebrity});
    })
    .catch(err =>{
        next(err)
    })
})





router.post('/create',(req,res,next)=>{
   const {name,occupation,catchPhrase} = req.body;
   Celebrity.create({
       name: name,
       occupation: occupation,
       catchPhrase: catchPhrase
   })
   .then(celebrity =>{
       console.log("A new celebrity was added", celebrity);
       res.redirect('/celebrities');
   })
   .catch(err => console.log(err))
   
})

router.post("/:id/delete", (req, res, next) => {
    Celebrity.findByIdAndRemove(req.params.id)
      .then(celebrity => {
        console.log("The celebrity was deleted", celebrity);
        res.redirect("/celebrities");
      })
      .catch(err => console.log(err));
  });

  router.get('/:id/edit',(req,res,next)=>{
      Celebrity.findById(req.params.id)
      .then(celebrity =>{
          res.render('celebrities/edit',{celebrity})
      })
      .catch(err => console.log(err));
  });


  router.post('/:id',(req,res,next)=>{
      const {name,occupation,catchPhrase} =req.body;
      Celebrity.updateOne(
          {_id:req.params.id},
          {$set:{name,occupation,catchPhrase}}
      )
      .then(()=>{
          res.redirect('/celebrities')
      })
      .catch(err=>next(err))
  })

module.exports = router;