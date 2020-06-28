const express = require('express')
const router = express.Router()

const Celebrity = require('../models/celebrity.model')
const { findByIdAndDelete } = require('../models/celebrity.model')

router.get('/list', (req, res) => {
  
  Celebrity.find()
  .then(allCelebrities => res.render('celebrities/index', { allCelebrities }))
  .catch(err => console.log("Error in DB", err))
})
router.get('/details/:id', (req, res) => {
  Celebrity
  .findById(req.params.id)
  .then(theCelebrity => res.render('celebrities/show', theCelebrity))
  .catch(err => console.log("Error in DB", err))
})
router.get('/new', (req, res) => {
  res.render('celebrities/new',)
})
router.post('/new', (req, res) => {
  const { name, occupation, catchPhrase } = req.body
  
  Celebrity
  .create({ name, occupation, catchPhrase })
  .then(() => res.redirect('/celebrities/list'))
  .catch(err => console.log("Error in DB", err))
  
})
router.post('/:id/delete', (req, res) => {
  Celebrity
  .findByIdAndRemove(req.params.id)
  .then(() => res.redirect('/celebrities/list'))
  .catch(err => console.log("Error in DB", err))
  
})
router.get('/:id/edit', (req, res) => {
  Celebrity
  .findById(req.params.id)
  .then(theCelebrity => res.render('celebrities/edit', theCelebrity))
  .catch(err => console.log("Error in DB", err))
})
router.post('/edit/:id', (req, res) => {
  const { name, occupation, catchPhrase } = req.body
  
  Celebrity
  .findByIdAndUpdate(req.params.id, { name, occupation, catchPhrase }, { new: true })
  .then(() => res.redirect(`/celebrities/details/${req.params.id}`))
  .catch(err => console.log("Error in DB", err))
  
})
module.exports = router