const express = require('express');
const celebrityRouter  = express.Router();
const Celebrity = require('../models/Celebrity');

// const uploadCloud = require('../config/cloudinary-setup');
const uploadMagic = require('../config/cloudinary-setup');

celebrityRouter.post('/celebrities/:id', uploadMagic.single('thePic'), (req, res, next) => {
  let img = req.file.url;
  let newCelebrityx = {...req.body, image: img};
  console.log('POST celebrities/:id  inside router..' );

   Celebrity.findByIdAndUpdate(req.params.id, newCelebrityx)
      .then((thingFromDB)=>{

        // res.redirect('/celebrities/' + req.params.id );
        req.flash('success', 'you updated a celebrity!');
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
  
  
});

celebrityRouter.post('/celebrities', uploadMagic.single('thePic'),(req, res, next) => {
  console.log("you are POST in celebreties/new  route");
    let name = req.body.name;
    let occupation = req.body.occupation;
    let catchPhrase = req.body.catchPhrase;
    let img = req.file.url;

    const newCelebrity = new Celebrity( {
      name:name,
      occupation: occupation,
      catchPhrase: catchPhrase,
      image: img
    });

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
