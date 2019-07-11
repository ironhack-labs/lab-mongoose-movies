const express = require('express');
const apirouter  = express.Router();
const Celebrity = require('../models/Celebrity');

apirouter.get('/celebrities', (req, res, next) => {
  Celebrity.find()
  .then((thingFromDB)=>{
      res.json(thingFromDB);
    // res.render('celebrities',{allTheCelebrities:thingFromDB}); 
  })
  .catch((err)=>{
    console.log(err);
    next(err);
  });

});


apirouter.post('/celebrities', (req, res, next) => {
  console.log("you are POST in celebreties/new  route");

  

    const newCelebrity = new Celebrity( req.body);
    
    newCelebrity.save()
      .then((celebrityx)=>{
        res.json({message: 'Succesfully Created Celebrity'})
      })
      .catch((err)=>{
        
        res.json(err);
      });
});


/* GET home page */
apirouter.get('/', (req, res, next) => {
  res.render('forapi/index');
});


module.exports = apirouter;