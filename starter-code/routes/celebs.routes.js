const express = require('express')
const router = express.Router()


const Celebrity = require('../models/celeb.model')
const { route } = require('./base.routes')



// ------ SEE ALL CELEBRITIES

router.get('/', (req, res) => {
  Celebrity
    .find()
    .then(allCelebs => res.render('celebs/index', { allCelebs }))
    .catch(err => console.log('Error with allCelebs:', err))
})



// ------ CREATE NEW CELEBRITY

router.get('/new', (req, res) => res.render('celebs/new-celeb'))

router.post('/', (req, res) => {
  const { name, occupation, catchphrase } = req.body
  if (!name || !occupation || !catchphrase) {
    res.render('celebs/new-celeb', { errorMsg: 'Please, fill in all information' })
    return
  }
  Celebrity
    .create({ name, occupation, catchphrase })
    .then(() => res.redirect('/celebrities'))
    .catch(err => console.log('There was an error creating newCeleb:', err))
})



// ------ SEE CELEBRITY DETAILS

router.get('/:celebId', (req, res) => {
  Celebrity
    .findById(req.params.celebId)
    .then(celebInfo => res.render('celebs/show', { celebInfo }))
    .catch(err => console.log('Error with celebInfo:', err))
})



// ------ DELETE CELEBRITY

router.post('/:celebId/delete', (req, res) => {
  Celebrity
    .findByIdAndRemove(req.params.celebId)
    .then(() => res.redirect('/celebrities'))
    .catch(err => console.log('There was an error deleting a celeb:', err))
})



// ------ EDIT CELEBRITY

router.get('/:celebId/edit', (req, res) => {
  Celebrity
    .findById(req.params.celebId)
    .then(editCeleb => res.render('celebs/edit', { editCeleb }))
    .catch(err => console.log('Error editing celeb:', err))
})

router.post('/:celebId', (req, res) => {
  const { name, occupation, catchphrase } = req.body
  Celebrity
    .findByIdAndUpdate(req.params.celebId, { name, occupation, catchphrase })
    .then(() => res.redirect('/celebrities'))
    .catch(err => console.log('There was an error editing a celeb:', err)) 
})

module.exports = router
