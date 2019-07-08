const express = require('express');
const celebrityRouter  = express.Router();
const Celebrity = require('../models/Celebrity');

celebrityRouter.post('/celebrities/:id', (req, res, next) => {

  console.log('POST celebrities/:id  inside router..' );
   Celebrity.findByIdAndUpdate(req.params.id, req.body)
      .then((thingFromDB)=>{

        // res.redirect('/celebrities/' + req.params.id );
        res.redirect('/celebrities');

      })
      .catch((err)=>{
        console.log(err);
        next(err);
      });
});

celebrityRouter.get('/celebrities/:id/edit', (req, res, next) => {
  console.log('you are in edit route..');
    Celebrity.findById(req.params.id)
      .then((celebrityx)=>{
          console.log("object from db from edit is:   " + celebrityx)
          res.render('celebrities/edit', {thecelebrityx:celebrityx});
      })
      .catch((err)=>{
        console.log('error ' + err);
        next(err);
      });
});


celebrityRouter.post('/celebrities/:id/delete', (req, res, next) => {
  console.log("you are delete in celebreties/delete  route");
  Celebrity.findByIdAndRemove(req.params.id)
    .then(()=>{
      res.redirect('/celebrities');
    })
    .catch((err)=>{
      console.log(err);
      next(err);
    });

    
});

celebrityRouter.get('/celebrities/new', (req, res, next) => {
  console.log("you are in celebreties/new GET route");

    res.render('celebrities/new')
    .catch((err)=>{
      console.log(err);
      next(err);
    });
  
});

celebrityRouter.post('/celebrities', (req, res, next) => {
  console.log("you are POST in celebreties/new  route");

    const newCelebrity = new Celebrity( req.body);

    newCelebrity.save()
      .then((celebrityx)=>{
        res.redirect('celebrities');
      })
      .catch((err)=>{
        console.log(err);
        res.redirect('celebrities/new',{
          errorMessage: "Error when adding to DB try again!"
        });
        next(err);
      });
});

celebrityRouter.get('/celebrities/:id', (req, res, next) => {

  console.log('celebrities/:id  inside router..' );
  Celebrity.findById(req.params.id)
  .then((thingFromDB)=>{

    res.render('celebrities/show',{theCelebrity :thingFromDB});
  })
  .catch((err)=>{
    console.log(err);
    next(err);
  });
});


celebrityRouter.get('/celebrities', (req, res, next) => {
  Celebrity.find()
  .then((thingFromDB)=>{

    res.render('celebrities',{allTheCelebrities:thingFromDB});
  })
  .catch((err)=>{
    console.log(err);
    next(err);
  });
});




module.exports = celebrityRouter;
