const mongoose = require('mongoose')
const myCelebs = require('../models/celebrity')
//  mongoose.connect('mongodb://localhost/celebrity')
const express = require('express');
const router  = express.Router();




router.get('/celebrities', (req, res) => {
  myCelebs.find({}, function(err, celeb) {
    
    res.render('celebrities/index', {celeb})
    // console.log({celeb});

  });
});

router.get('/celebrities/:id', (req, res) => {
  // const theId = req.params.id;
  myCelebs.findById(req.params.id, 
    function(err, celeb) {
    res.render('celebrities/show', {celeb})
  });
});

router.get('/celebrities/new/celeb', (req, res) => {
  // console.log("hey hello")
    res.render('celebrities/new')
  
  });


  router.post('/celebrities/new/create', function (req, res){
    
  
    //where it is in html
  
    const theName = req.body.theName;
    const theOccupation = req.body.theOccupation;
    const theCatchphrase = req.body.theCatchphrase;
  
  
  
  //change to keys from db
  
    const newCeleb = new myCelebs({
      name: theName,
      occupation: theOccupation,
      catchphrase: theCatchphrase,
    
  
    })
  
    newCeleb.save()
    .then(celeb => {
      console.log(celeb)
    })
    .catch(theError => {res.render('/celeberities/new/celeb')})
  
    // res.redirect('/')
    res.redirect('/celebrities/'+ newCeleb._id)
  })



  router.post('/celebrities/delete/:id', function(req, res){
    const celebId = req.params.id
    const theCeleb = myCelebs.findByIdAndRemove(celebId)
    .then(celeb => {
    
    })
    .catch(error => {
      console.log(error);
    })
    res.redirect('/celebrities')
    })


    router.get('/celebrities/:id/edit', function (req, res) {
      myCelebs.findById(req.params.id)
      .then(theCeleb =>{
        res.render('celebrities/edit', {celeb: theCeleb} )
      })
    
    })
    
    
    
    router.post('/celebrities/:id/update', function (req, res){

    
      myCelebs.findByIdAndUpdate(req.params.id, {
        name: req.body.theName,
        occupation: req.body.theOccupation,
        catchphrase : req.body.theCatchphrase,

      })
      .then(celeb => {
        console.log(celeb)
     })
     .catch(theError => {console.log(theError)})
  

    
     res.redirect('/celebrities/'+req.params.id)
    })  




module.exports = router;