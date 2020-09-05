const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity')

router.get('/', (req, res, next) => {
  Celebrity.find()
  .then(celebrityDocs => {
    console.log(celebrityDocs)
    res.render('celebrities/index', {celebrityDocs})
  })
  .catch(err => {
    next(err)
  })
})

router.get('/celebrity/:id', (req, res, next) => {
  const { id } = req.params

  Celebrity.findById(id)
  .then(celebrity => {
    res.render('celebrities/show', celebrity)
  })
  .catch(err => {
    next(err)
  })
})

router.get('/new', (req, res, next) => {
  res.render('celebrities/new')
})

router.post('/new', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body

  Celebrity.create({ name, occupation, catchPhrase})
  .then(bookAdded => {
    res.redirect('/celebrities')
  })
  .catch(err => {
    next(err)
  })
})

router.post('/:id/delete', (req, res, next) => {
  Celebrity.findByIdAndRemove({_id: req.params.id})
  .then(result => {
    res.redirect('/celebrities')
  })
  .catch(err => {
    next(err)
  })
})

module.exports = router