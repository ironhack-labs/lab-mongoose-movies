const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity')
const User = require('../models/User')

router.get('/', (req, res, next) => {
  Celebrity.find()
  .then(celebrityDocs => {
    // console.log(celebrityDocs)
    // console.log(req.session.currentUser )
    res.render('celebrities/index', {celebrityDocs, userInSession: req.session.currentUser})
   
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

router.post('/', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body

  Celebrity.create({ name, occupation, catchPhrase})
  .then(celebrityAdded => {
    res.redirect('/celebrities')
  })
  .catch(err => {
    next(err)
  })
})

router.post('/:id/delete', (req, res, next) => {
  const { id } = req.params
  console.log(id)
  Celebrity.findByIdAndRemove({_id: req.params.id})
  .then(result => {
    res.redirect('/celebrities')
  })
  .catch(err => {
    next(err)
  })
})


router.get('/:id/edit', (req, res, next) => {
  const { id } = req.params
  console.log(id)

  Celebrity.findById(id)
  .then(result => {
    res.render('celebrities/edit', result)
  })
  .catch(err => {
    next(err)
  })
})

router.post('/:id', (req,res, next) => {
  const { id } = req.params
  const { name, occupation, catchPhrase } = req.body

  Celebrity.findByIdAndUpdate(id, {$set: {name, occupation, catchPhrase }}, { new: true })
    .then(updatedCelebrity => {
      res.redirect('/celebrities')
    })
    .catch(err => {
      next(err)
    })
})

module.exports = router