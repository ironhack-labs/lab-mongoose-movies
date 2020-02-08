const express = require('express');
const router = express.Router();

const Celebrity = require('../models/celebrity.models');

/* GET home page */
router.get('/', (req, res, next) => {
  Celebrity.find()
    .then(allCelebritys => res.render('celebrity/listCelebrity', {
      celebrity: allCelebritys
    }))
    .catch(err => console.log(err))
})

router.get('/details/:id', (req, res) => {

  const celebrityId = req.params.id

  Celebrity.findById(celebrityId)
    .then(celebrity => res.render('celebrity/details', celebrity))
    .catch(err => console.log(err))
})

router.get('/add', (req, res) => res.render('celebrity/form'))
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
    .then(() => res.redirect('/celebrity'))
    .catch(err => console.log(err))
})

router.get('/delete/:id', (req, res, next) => {

  const celebrityId = req.params.id

  Celebrity.findByIdAndRemove(celebrityId)
    .then(() => res.redirect('/celebrity'))
    .catch(err => console.log(err))
})


router.get('/edit/:id', (req, res) => {

   const celebrityId = req.params.id

  Celebrity.findById(celebrityId)
    .then(theCelebrity => res.render('celebrity/edit', theCelebrity))
    .catch(err => console.log(err))
})

router.post('/edit/:id', (req, res) => {

  const celebrityId = req.params.id

  Celebrity.findByIdAndUpdate(celebrityId, req.body)
    .then(() => res.redirect(`/celebrity/details/${celebrityId}`))
    .catch(err => console.log(err))
})


module.exports = router;