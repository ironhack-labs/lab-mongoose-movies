const express = require('express');
const router  = express.Router();
const Celeb = require('../models/Celeb')
const bodyParser = require('body-parser')

//CELEB ROUTES

// celeb indexpage
router.get('/celebs/list', (req,res,next) => {
  Celeb.find()
  .then( celebData => {
    res.render('celebrities/list', { celebData })
  })
  .catch(err => console.log('Error', err))
})

//create new celebs
router.get('/newCeleb', (req, res, next) => {
  res.render('celebrities/add')
})

router.post('/newCeleb', (req, res, next) => {
  const { name,occupation,catchPhrase } = req.body
  const newCeleb = new Celeb({ name,occupation,catchPhrase })
  newCeleb.save()
  .then(() => {
    res.redirect('/celebs/list')
  })
  .catch((err) => {
    console.log('Error', err)
  })
})

// show details page for celebs
router.get('/celebs/:id', (req,res,next) => {
  const celebId = req.params.id
  Celeb.findById(celebId)
    .then(celeb => {
      res.render('celebrities/details', {celeb})
    })
    .catch(error => {
      console.log(error)
    })
})

//delete a celeb
router.post('/celebs/delete', (req,res,next) => {
  Celeb.findByIdAndDelete(req.query.id)
  .then( () => {
    res.redirect('/celebs/list')
  })
  .catch(error => {
    console.log(error)
  })
})

// edit details for a celeb
router.get('/celebs/edit/:id', (req,res,next) => {
  Celeb.findById(req.params.id)
  .then((celebToEdit) => {
    res.render('celebrities/edit', {celebToEdit})
  })
  .catch(error => {
    console.log(error)
  })
})

router.post('/celebs/edit', (req, res, next) => {
  const { name,occupation,catchPhrase } = req.body;
  const celebId = req.query.id;
  Celeb.findByIdAndUpdate(celebId, { name,occupation,catchPhrase })
  .then(() => {
    res.redirect('/celebs/list')
  })
  .catch(error => {
    console.log(error)
  })
})


module.exports = router;