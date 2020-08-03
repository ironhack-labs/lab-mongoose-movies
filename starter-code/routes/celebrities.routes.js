const express = require('express');
const router  = express.Router();
const CelebrityModel = require('../models/celebrity.model')

router.get('/celebrities', (req, res, next) => {
    CelebrityModel.find()
        .then ((celebrity) => {
            res.render('./celebrities/index.hbs', {celebrity});
        })
        .catch ((err) => {
            console.log('Error is:', err)
            next()
        })
  });

  router.get('/celebrities/:id', (req, res, next) => {
    CelebrityModel.findById(req.params.id)
        .then((celeb) => {
            res.render('./celebrities/show.hbs', {celeb})
        })
        .catch ((err) => {
            console.log('Error is:', err)
            next()
        })
  })

router.get('/celebrities/new', (req, res, next) => {
    res.render('./celebrities/new.hbs')
})

router.post('/celebrities', (req, res) => {
    CelebrityModel.create(req.body)
        .then(() => {
            res.redirect('/celebrities')
        })
        .catch(() => {
            res.render('./celebrities/new.hbs', {failedAdd: true})
        })
})

router.post('/celebrities/:id/delete', (req, res) => {
    CelebrityModel.findByIdAndDelete(req.params.id)
        .then(() => {
            res.redirect('/celebrities')
        })
        .catch(() => {
            next()
            console.log('Error is:', err)
        })
})

router.get('/celebrities/:id/edit', (req, res, next) => {
    CelebrityModel.findById(req.params.id)
    .then((result) => {
        res.render('./celebrities/edit.hbs', {result})
    })
    .catch(() => {
        next()
        console.log('Error is:', err)
    })
})

router.post('/celebrities/:id/edit', (req, res, next) => {
    let {name, occupation, catchPhrase} = req.body
    let celebId = req.params.id
    CelebrityModel.findByIdAndUpdate(celebId, {$set: {name, occupation, catchPhrase}})
      .then(() => {
        res.redirect('/celebrities')
      })
      .catch (() => {
        res.render('./celebrities/edit.hbs', {failedAdd: true})
      })
  });

  
  module.exports = router;