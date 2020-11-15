const express = require('express')
const router = express.Router()

const Celebrity = require('../models/celebrity.js')

router.get('/', (req, res) => {
  Celebrity
    .find()
    .then(celebrity => {
        res.render('celebrities/index', { celebrity})
    })
    .catch(err => console.log(err))
})

router.get('/:celebrity_id', (req, res) => {

  const celebrityId = req.params.celebrity_id

  Celebrity
    .findById(celebrityId)
    .then(celebrity => {
      res.render('celebrities/show', celebrity)
    })
    .catch(err => console.log(err))
})

// router.get('/new', (req, res) => {
//   console.log('New was called')
//   res.render('celebrities/new')
// })

// router.post('/new', (req, res) => {

//   const { name, occupation, catchPhrase } = req.body

//   Celebrity
//     .create({ name, occupation, catchPhrase })
//     .then(() => res.redirect('/'))
//     .catch(err => {
//       console.log(err)
//       res.render('celebrities/new') //{ errorMsg: 'There was an error creating the celebrity. Please /////       try again.' })
//     })
// })



module.exports = router
