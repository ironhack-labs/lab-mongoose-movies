const express = require('express');
const router = express.Router();

const Celebrity = require('../models/celebrity.model')


//---CELEBRITY PAGE---//
router.get('/', (req, res) => {
  Celebrity.find()
    .then(allTheCelebs => {
      console.log('celebs from db:', allTheCelebs)
      res.render('celebrityList', {
        celebs: allTheCelebs
      })
    })
    .catch(err => console.log('Error consultando la base de datos: ', err))
})

//---CELEBRITY DETAILS---//
router.get('/details/:id', (req, res) => {
  Celebrity.findById(req.params.id)
    .then(theCeleb =>
      res.render('celebrityDetails', {
        celeb: theCeleb
      }))
    .catch(err => console.log('Error consultando la base de datos: ', err))
})

//---NEW CELEBRITY FORM RENDER---//
router.get('/add', (req, res) => res.render('newCelebForm'))

//--NEW CELEBRITY SEND FORM---//
router.post('/add', (req, res) => {
  const {
    name,
    occupation,
    catchPhrase
  } = req.body
  Celebrity.create({
      name,
      occupation,
      catchPhrase
    })
    .then(x => res.redirect('/celebrities'))
    .catch(err => 'Error: ' + err)
})

//---EDIT CELEBRITY FORM RENDER---//
router.get('/edit', (req, res) => {
  const celebId = req.query.celebId
  Celebrity.findById(celebId)
    .then(editCeleb => res.render('editCelebForm', editCeleb))
    .catch(err => console.log('Error: ', err))
})

//---EDIT CELEBRITY SEND FORM---//
router.post('/edit', (req, res) => {
  const {
    name,
    occupation,
    catchPhrase
  } = req.body
  const celebId = req.query.celebId
  Celebrity.findByIdAndUpdate(celebId, {
      name,
      occupation,
      catchPhrase
    })
    .then(res.redirect('/celebrities'))
    .catch(err => console.log('Error: ', err))
})

//---DELETE CELEBRITY---/
router.get('/delete', (req, res) => {
  const celebId = req.query.celebId
  Celebrity.findByIdAndRemove(celebId)
    .then(res.redirect('/celebrities'))
    .catch(err => console.log('Error consultando la base de datos: ', err))
})


module.exports = router;