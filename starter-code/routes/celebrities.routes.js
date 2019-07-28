const express = require('express')
const router = express.Router()

const Celebrity = require('../models/celebrity.model')


router.get('/list', (req, res, next) => {
  Celebrity.find({})
  .then(celebs => res.render('celebs-index', {celebs}))
  .catch(err => console.log('Hubo un error:', err))
})

router.get('/add', (req, res, next) => res.render('create-celeb'))
router.post('/add', (req, res, next) => {

  const {name, occupation, catchPhrase} = req.body

  Celebrity.create({name, occupation, catchPhrase})
    .then(() => res.redirect('/celebs/list'))
    .catch(err => console.log('Hubo un error:', err))
})

router.get('/delete/:id', (req, res, next) =>{
  const celebId = req.params.id
  //console.log("mycelebid ",celebId)

  Celebrity.findOneAndDelete({_id: celebId})
     .then(() => res.redirect('/celebs/list'))
})

router.get('/edit', (req, res, next) => {
  Celebrity.findById(req.query.celebId)
  .then(celeb => res.render('celebs-edit', {celeb}))
  .catch(err => console.log('Hubo un error:', err))
})
router.post('/edit', (req, res, next) => {

  const {name, occupation, catchPhrase} = req.body

  Celebrity.findByIdAndUpdate(req.query.celebId, {$set: {name, occupation, catchPhrase}}, {new: true})
    .then(() => res.redirect('/celebs/list'))
    .catch(err => console.log('Hubo un error:', err))
})

router.get('/:id', (req, res, next) => {
  const celebId = req.params.id
  Celebrity.findById(celebId)
  .then(celeb => res.render('celebs-details', {celeb}))
  .catch(err => console.log('Hubo un error: ', err))
})




module.exports = router