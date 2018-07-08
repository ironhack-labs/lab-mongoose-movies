const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/celebrity.js')

router.get('/', (req, res, next) => {
  Celebrity.find({}).then(
    celebrities => {
      res.render('celebrities/index', {title: 'Celebrities', celebrities})
    })
})


router.get('/new', (req, res, next) => {
  res.render('celebrities/new', {title: 'Add a celebrity'})
})


router.post('/', (req, res, next) => {
  const {name, catchPhrase, occupation} = req.body;
  new Celebrity({name, catchPhrase, occupation})
  .save().then( () => {
    res.redirect('/celebrities');
  })
})


router.get('/:id/delete',(req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id, () => res.redirect('/celebrities'));
})

router.get('/:id/edit', (req, res, next) => {
  Celebrity.findById(req.params.id).then(celebrity => {
    res.render('celebrities/edit', {title: 'Edit celebrity', celebrity});;
  })
})

router.post('/:id/edit', (req, res, next) => {
  const {name, catchPhrase, occupation} = req.body;
  Celebrity.findByIdAndUpdate(req.params.id,{name, catchPhrase, occupation})
      .then( celebrty => {
        res.redirect('/celebrities')
      })
})

router.get('/:id', (req, res, next) => {
  Celebrity.findById(req.params.id).then(
    celebrity => {
      res.render('celebrities/show', {title: 'Celebrity detail', celebrity})
    })
})

module.exports = router
