const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity');

// celebrity overview
router.get('/', (req, res, next) => {
  Celebrity.find({})
    .then(celebrities => {
      res.render('./celebrities/index.hbs', {celebrities: celebrities});
    })
    .catch(err => {
      console.log(err);
    })
});


// form for adding new celebrities
router.get('/new', (req, res, next) => {
  res.render('./celebrities/new');
})

// creating the celebrity document with the data provided in the form /new
router.post('/new', (req, res, next) => {
  Celebrity.create(req.body)
  .then(result => {
    console.log('succesfull add', result);
    res.redirect('/celebrities')
  })
  .catch(err => {
    console.log(err);
  })
})

// edit record (form / get)
router.get('/:id/edit', (req, res, next) => { 
  Celebrity.findOne({_id: req.params.id})
    .then(celebrity => {
      console.log(celebrity);
      res.render('./celebrities/edit', celebrity);
    })
    .catch(err => {
      console.log(err);
    })
});

// edit record (post + redirect)
router.post('/:id/edit', (req, res, next) => { 
  Celebrity.updateOne({_id: req.params.id}, req.body)
    .then(celebrity => {
      console.log('updated celebrity', celebrity);
      res.redirect('/celebrities');
    })
    .catch(err => {
      console.log(err);
    })
})

// deleting one record (by clicking the button)
router.post('/:id/delete', (req, res, next) => {
  Celebrity.findByIdAndDelete({_id: req.params.id})
    .then(record => {
      console.log('record deleted', record);
      res.redirect('/celebrities');
    })
    .catch(err => {
      console.log(err);
    })
})

// showing one celebrity with details
router.get('/:id', (req, res, next) => {
  Celebrity.findOne({_id : req.params.id})
    .then(celebrity => {
      res.render('./celebrities/show', celebrity)
    })
    .catch(err => {
      console.log(err);
    })
});

module.exports = router;