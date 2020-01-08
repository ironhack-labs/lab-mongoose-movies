const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity');

// GET Celebrities page - Route to access the celebrities index.hbs page and display each celebrity
router.get('/', (req, res, next) => {
  Celebrity.find()
  .then(celebrity => {
    res.render('celebrities/index', { celebrity })
  })
  .catch(error => {
    next()
    console.log(error)
  })
});

//GET Celebrities ID
router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  Celebrity.findById(id)
  .then(celebrity => {
    res.render('celebrities/show', celebrity)
  })
  .catch(error => {
    next();
    console.log(error)
  })
})

//GET New Celebrities
router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
});

//POST New Celebrities - insert new data to MongoDB
router.post('/', (req, res, next) => {
  let {name, occupation, catchPhrase} = req.body;
  Celebrity
  .create({name, occupation, catchPhrase})  
  .then(newCelebrities => {
    res.redirect('/celebrities')
  })
  .catch(error => {
    console.log(error)
  })
})


module.exports = router;

