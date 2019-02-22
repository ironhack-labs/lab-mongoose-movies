const express = require('express');
const router  = express.Router();

const CelebritySchema = require('../models/Celebrity.js')

router.get('/celebrities', (req, res) => {
  CelebritySchema.find({}, (err, CelebritySchema) => {
    if(err) res.send(err)
    else res.render('celebrities/index.hbs', {CelebritySchema})
  })
});

router.get('/celebrities/:id', (req, res) => {
  CelebritySchema.findById(req.params.id, (err, CelebritySchema) => {
    if(err) res.send(err)
    else res.render('celebrities/show.hbs', {CelebritySchema})
  })
})

router.get('/celebrities/new', (req, res) => {
  res.render('celebrities/new.hbs', {CelebritySchema})
})

// const bodyParser   = require('body-parser');

router.post('/celebrities', (req, res) => {
  let newCelebrity = {
    name: req.param.apply,
    occupation: req.param.apply,
    catchPhrase: req.param.apply,
  }
  res.send('POST request to the homepage');
});

module.exports = router;


// .get("/create")...........
// .get("/create-restaurant", (req, res) => {
//   let newRestaurant = {
//     //object
//   }
//   Restaurant.create(newRestaurant, (err) => { //no poner newRestaurant entre {} porque ya es un objeto
//     if (err)...
//     else res.status(200).send("restaurant created")
//   })
// })