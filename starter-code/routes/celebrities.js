const express = require('express');
const router  = express.Router();
const Celebrity   = require('../models/Celebrity');

router.get('/celebrities', (req,res, next)=>{
  Celebrity.find()
  .then((whatWeGetFromDb) => {
   res.render('celebrities/index', {alltheCelebrties: whatWeGetFromDb})
  })
  .catch((err) =>{
    console.log(err);
  })
});


router.get('/celebrities/details/:idOfCeleb', (req, res, next)=>{
  Celebrity.findById(req.params.idOfCeleb)
  .then((whatWeGetFromDb)=>{
          res.render('celebrities/show', {aCelebrity: whatWeGetFromDb})
  })
  .catch((err)=>{
      next(err);
  })
})



router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new');
  
})

router.post('/celebrities-new' , (req,res, next)=> {
  const newCeleb =  {
    name: req.body.name, 
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase 
  } 
    Celebrity.create(newCeleb)
    .then(()=>{
        res.redirect('/celebrities')
    })
    .catch((err)=>{
        next(err);
    })
})


router.post('/celebrities/delete/:idOfCeleb', (req, res, next)=>{

  Celebrity.findByIdAndRemove(req.params.idOfCeleb)
  .then(()=>{
      res.redirect('/celebrities');
  })
  .catch((err)=>{
      next(err);
  })

})

router.get('/celebrities/edit/:idOfCeleb', (req, res, next)=>{
  Celebrity.findById(req.params.idOfCeleb)
  .then((whatWeGetFromDb)=>{
          res.render('celebrities/editCeleb', {aCelebrity: whatWeGetFromDb})
  })
  .catch((err)=>{
      next(err);
  })
})

router.post('/celebrities/update/:aCelebrityID',(req,res,next)=>{
  let theID = req.params.aCelebrityID;
  Celebrity.findByIdAndUpdate(theID , req.body)
  .then((aCelebrity) => {
    res.redirect('/celebrities/details/'+ theID)
  })
  .catch((err)=>{
    next(err);
  })
})

module.exports = router;
