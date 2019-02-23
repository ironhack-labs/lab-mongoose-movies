const express = require('express');
const router  = express.Router();
const bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({ extended: false }))

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

router.get('/new', (req, res) => {
  res.render('celebrities/new.hbs')
})

router.post('/celebrities', (req, res) => {
  let newCelebrity = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  }
  CelebritySchema.create(newCelebrity, (err) => {
    if(err) res.status(500).send("Celebrity not added")
    else res.redirect('/celebrities')
  })
  // CelebritySchema.create(newCelebrity, (err) => {
  //   if(err) res.status(500).send("Celebrity not added")
  //   else res.status(200).send("New celebrity added")
  // })
  // CelebritySchema.save((err) => {
  //   if(err) res.render('celebrities/new.hbs', {CelebritySchema})
  //   else res.redirect('/celebrities')
  // })
})

router.post('/celebrities/:id/delete', (req, res) => {
  CelebritySchema.findByIdAndRemove(req.params.id, (err) => {
    if(err) res.status(500).send("Celebrity not removed")
    else res.redirect('/celebrities')
  })
})

router.get('/celebrities/:id/edit', (req, res) => {
  CelebritySchema.findById(req.params.id, (err, CelebritySchema) => {
    if (err) res.status(500).send("Could not edit celebrity")
    else res.render('celebrities/edit.hbs', CelebritySchema)
  })
})

// router.post('/celebrities/:id', (req, res) => {
//   let editCelebrity = {
//     name: req.body.name,
//     occupation: req.body.occupation,
//     catchPhrase: req.body.catchPhrase
//   }
//   CelebritySchema.update(req.params.id, editCelebrity, {upsert: true}, (err) => {
//     if(err) res.status(500).send("Celebrity not edited")
//     else res.redirect('/celebrities')
//   })
// })

router.post('/celebrities/:id', (req, res) => {
  let editCelebrity = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  }
  CelebritySchema.findByIdAndUpdate(req.params.id, editCelebrity, {upsert: true}, (err) => {
    if(err) res.status(500).send("Celebrity not edited")
    else res.redirect('/celebrities')
  })
})

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