const express = require('express');
 const celebModel = require('../models/celebrity.js'); //require('') = ProductModel
 const router = express.Router();




router.get('/celebrities', (req,res,next)=>{
  // VVV first variable is always the error, 2nd is always the resultVV
  celebModel.find((err, celebrityResults)=> {
    if (err){
      // use next() to skip to the ERROR PAGE
      next(err);
      return;
    }



    res.render('celebrities/index.ejs',
  {
    differentCelebs: celebrityResults
  });
  });
});

router.get('/celebrities/new',(req,res,next)=>{
  // display 'new-product-view.ejs'
  res.render('celebrities/new.ejs');
});

router.post('/celebrities', (req,res,next)=>{
  const theCeleb = new celebModel({
    name: req.body.celebrityName,
    occupation: req.body.celebrityOccupation,
    catchPhrase: req.body.celebrityCatchPhrase
  });

  console.log('');
  console.log('$$$$$$$$$$$$$$$$$$$$$-----------');
  console.log('BEFORE SAVE');
  console.log(theCeleb.errors);



  theCeleb.save((err) =>{
      // If there was an error that was NOT a validation error...
    if (err && theCeleb.errors === undefined) {
      // If there was an error, use next() to skip to the ERROR PAGE.
      next(err);
      return;
    }

    //If saved successfully, redirect to a URL.
    // (redirect is STEP #3)
    res.redirect('/celebrities');
      // you can ONLY redirect to a URL

      // if you dont redirect, you can refresh and duplicate your data

  });
});



router.get('/celebrities/:myId',(req,res,next)=>{
  //   /products/details?myId=5951392398213093nsvjkfs9832
  //                       |
  //                    req.params.myId
  celebModel.findById(
    req.params.myId,      // 1st argument -> the id to find in the DB
    (err, celebFromDb) => {   // 2nd argument -> callback
      if (err){
        next(err);
        return;
      }
      // res.locals.productDetails = productFromDb;
      // res.render('product-views/product-details-view.ejs');


      // Other way of transfering variables to the view:
      //
      res.render('celebrities/show.ejs',{
        celebDetails: celebFromDb,
      });



    }
  );
});



// Delete
router.post('/celebrities/:myId/delete', (req,res, next) => {
  celebModel.findByIdAndRemove(
    req.params.myId,
    (err, celebFromDb) => {
      if(err){
      next(err);
      return;
    }
        res.redirect('/celebrities');
  }
  );

});
















 module.exports = router;
