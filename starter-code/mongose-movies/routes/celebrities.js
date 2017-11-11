const express = require('express');
const Celebrity =require ('../models/celebrity');
const router = express.Router();

/* GET Celebrities listing. */
router.get('/celebrities', (req, res, next)=> {
  Celebrity.find({},(err,data)=>{
    if(err){
      return next(err);
    }
    console.log("/celebrities GET");
    res.render('celebrities/index',{data : data});
  });
});

// New item
router.get('/celebrities/new', (req, res, next)=> {
      res.render('celebrities/new');
});

// Add new item
router.post('/celebrities', (req, res, next)=> {
  const data ={
    name:req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };
  const newCelebrity =new Celebrity(data);
  newCelebrity.save( (err)=>{
    if(err){
      return next(err);
    }
    res.redirect('/celebrities');
  });
});

// This in last possition
router.get('/celebrities/:id', (req, res, next)=> {
  const productId=req.params.id;
  Celebrity.findById(productId,(err,data)=>{
    if(err){
      return next(err);
    }
    console.log("/celebrities GET"+ data);
    res.render('celebrities/show',{data : data});
  });
});

// Edit item
router.get('/celebrities/:id/edit', (req, res, next)=> {
  const productId=req.params.id;
  Celebrity.findById(productId,(err,data)=>{
    if(err){
      return next(err);
    }
    res.render('celebrities/edit', {data: data});
  });
});


// Update item
router.post('/celebrities/:id', (req, res, next)=> {
  const productId=req.params.id;
  let dataUpdate ={
    name:req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };
  Celebrity.findByIdAndUpdate(productId,dataUpdate,(err,data)=>{
    if(err){
      return next(err);
    }
    return res.redirect('/celebrities');
  });
});

// Delete item
router.post('/celebrities/:id/delete', (req, res, next)=> {
  const productId=req.params.id;
  Celebrity.findByIdAndRemove(productId,(err,data)=>{
    if(err){
      return next(err);
    }
    return res.redirect('/celebrities');
  });
});













module.exports = router;
