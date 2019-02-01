const express = require('express');
const router  = express.Router();
const Celeb = require('../models/Celeb')
const bodyParser = require('body-parser')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebs', (req,res,next) => {
  Celeb.find()
  .then( celebData => {
    console.log('data!: ', celebData)
    res.render('celebs', { celebData })
  })
  .catch(err => console.log('Error', err))
})

router.get('/new', (req, res, next) => {
  res.render('new')
})

router.post('/new', (req, res, next) => {
  const { name,occupation,catchPhrase } = req.body
  const newCeleb = new Celeb({ name,occupation,catchPhrase })
  newCeleb.save()
  .then(() => {
    res.redirect('/new')
  })
  .catch((err) => {
    console.log('Error', err)
  })
})



module.exports = router;