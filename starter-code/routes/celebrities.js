const express = require('express')
const router = express.Router()

const Celebrity = require('../models/celebrity.models.js')


router.get('/list', (req, res) => {

  Celebrity.find()
    .then(celebrities => res.render('celebrities', { celebrities }))
    .catch(err => console.log('ERROR:', err))
})


router.get('/new', (req, res) => res.render('new'))

router.post('/new', (req, res) => {

  const { name, occupation, catchPhrase } = req.body

  Celebrity.create({ name, occupation, catchPhrase })
    .then(() => res.redirect('/celebrities/list'))
    .catch(err => console.log("ERRORR", err))
})

router.get('/delete', (req, res) => {
  celebrity.findByIdAndDelete(_id)
    .then(celebrities => res.render('celebrities', { celebrities }))
    .catch(err => console.log('ERROR:', err))
})


router.get('/edit', (req, res) => {

  const celebrity_id = req.query.celebrity_id

  Celebrity.findById(celebrity_id)
    .then(celebrities => res.render('celebrities-edit', celebrities))
    .catch(err => console.log("ERRORR", err))
})

router.post('/edit/:celebrity_id', (req, res) => {

  const celebrity_id = req.params.celebrity_id

  const { name, occupation, catchPhrase } = req.body

  Celebrity.findByIdAndUpdate(celebrity_id, { name, occupation, catchPhrase })
    .then(() => res.redirect('/celebrities/list'))
    .catch(err => console.log("ERRORR", err))
})

router.get('/:celebrity_id', (req, res) => {

  const id = req.params.celebrity_id

  Celebrity.findById(id)
    .then(celebrities => res.render('show', celebrities))
    .catch(err => console.log("ERRORR", err))
})

module.exports = router
