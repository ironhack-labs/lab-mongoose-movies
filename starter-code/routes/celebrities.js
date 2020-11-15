const express = require('express')
const router = express.Router()

const Celebrity = require('./../models/celebrity')


// -- ENDPOINTS --

// List of celebrities
router.get('/', (req, res) => {

  Celebrity
    .find()
    .then(allCelebrities => res.render('celebrities/index', { allCelebrities }))
    .catch(err => console.log(err))
})


// Details of celebrity
router.get('/details/:id', (req, res) => {

  const celebrityId = req.params.id

  Celebrity
    .findById(celebrityId)
    .then(theCelebrity => res.render('celebrities/show', theCelebrity))
    .catch(err => console.log(err))
})


// -----  NEW CELEBRITY -----

// New celebrity form. Renderized (GET)
router.get('/new', (req, res) => res.render('celebrities/new'))

// New celebrity form. (POST)
router.post('/new', (req, res) => {

  const { name, occupation, catchPhrase } = req.body

  Celebrity
    .create({ name, occupation, catchPhrase })
    .then(() => res.redirect('/celebrities'))
    .catch(err => console.log(err))
})


// Delete celebrity
router.post('/delete', (req, res) => {

  const celebrityId = req.query.celebrity_id

  Celebrity
    .findByIdAndDelete(celebrityId)
    .then(() => res.redirect('/celebrities'))
    .catch(err => console.log(err))
})
 

// -----  EDIT CELEBRITY  -----

// Edit celebrity form. Renderized (GET)
router.get('/edit/:id', (req, res) => {

  const celebrityId = req.params.id
  
  Celebrity
    .findById(celebrityId)
    .then(celebrityInfo => res.render('celebrities/edit', celebrityInfo))
    .catch(err => console.log(err))
})

// Edit celebrity form. (POST)
router.post('/edit', (req, res) => {

  const celebrityId = req.query.celebrity_id
  
  const { name, occupation, catchPhrase } = req.body

  Celebrity
    .findByIdAndUpdate(celebrityId, { name, occupation, catchPhrase })
    .then(celebrityInfo => res.redirect('/celebrities'))
    .catch(err => console.log(err))
})
  
module.exports = router
