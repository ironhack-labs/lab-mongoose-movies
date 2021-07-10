const express=require('express');
const router=express.Router();
const Celebrity=require('../models/celebrity.js')

// router.get('/',(req,res,next)=>{
//   res.render('index');
// })

router.get('/celebrities',(req,res,next)=>{
    // console.log("CAN'T");
    // res.send("YEEEEES")
  // res.render('celebrities/index')
  Celebrity.find()
    .then(celebrities => {
      res.render('celebrities/index',{celebrities})
    })
    .catch(err=>{
      console.log("No celebrity!")
    })
})

router.get('/celebrities/:id', (req, res, next) => {
  let celebId=req.params.id;
  if(celebId!='new') {
    console.log("celebid is",celebId);
  Celebrity.findOne({'_id':celebId})
    .then(celebrity => {
    // console.log("IN MOVIES GET")
    res.render('celebrities/show',{celebrity});
    })
    .catch(err => {
      console.log(err)
    })
  } else {
    console.log("Im in NEW")
  res.render('celebrities/new');
  }
  
  
});

// router.get('/celebrities/new', (req, res, next) => {
//   console.log("Im in NEW")
//   res.render('celebrities/new');
// });

// router.post('/celebrities', (req, res, next) => {
//   // res.render('celebrities/show',{celebrity});
// });


module.exports=router;