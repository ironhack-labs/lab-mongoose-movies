const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity');

router.get('/', (req, res, next) => {
  Celebrity.find({})
    .then(celebrities => {
      res.render('./celebrities/index.hbs', {celebrities: celebrities});
    })
    .catch(err => {
      res.render('./error', err)
    })
});


router.get('/new', (req, res, next) => {
  res.render('./celebrities/new');
})

// creamos
router.post('/new', (req, res, next) => {
  Celebrity.create(req.body)
  .then(result => {
    
    res.redirect('/celebrities')
  })
  .catch(err => {
    res.render('./error', err)
  })
})

router.get('/:id/edit', (req, res, next) => { 
  Celebrity.findOne({_id: req.params.id})
    .then(celebrity => {
      
      res.render('./celebrities/edit', celebrity);
    })
    .catch(err => {
      res.render('./error', err)
    })
});

// editado
router.post('/:id/edit', (req, res, next) => { 
  Celebrity.updateOne({_id: req.params.id}, req.body)
    .then(celebrity => {
      res.redirect('/celebrities');
    })
    .catch(err => {
      res.render('./error', err)
    })
})


router.post('/:id/delete', (req, res, next) => {
  Celebrity.findByIdAndDelete({_id: req.params.id})
    .then(record => {
      res.redirect('/celebrities');
    })
    .catch(err => {
      res.render('./error', err)
    })
})


router.get('/:id', (req, res, next) => {
  Celebrity.findOne({_id : req.params.id})
    .then(celebrity => {
      res.render('./celebrities/show', celebrity)
    })
    .catch(err => {
      res.render('./error', err)
    })
});

module.exports = router;