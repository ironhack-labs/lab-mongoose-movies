const express = require('express')
const router = express.Router()

const Celebrity = require('./../models/celebrity-model')

//listing all the documents on the DB
router.get('/', (req, res, next) => {
  Celebrity.find()
    .then((allCelebs) => {
      res.render('celebrities/index', { allCelebs })
    })
    .catch((err) => {
      console.log(
        'An error ocurred when fetching all documents from the DB: ',
        err
      )
      next()
    })
})

router.get('/:celebrityId', (req, res, next) => {
  Celebrity.findById(req.params.celebrityId)
    .then((celebrity) => {
      res.render('celebrities/show', celebrity)
    })
    .catch((err) => {
      console.log(
        'An error ocurred when fetching an specific celebrity by ID: ',
        err
      )
      next()
    })
})

//CREATE

router.get('/new', (req, res, next) => res.render('celebrities/new'))

router.post('/new', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body
  console.log('requirement made: ', req.body)
  Celebrity.create({ name, occupation, catchPhrase })
    .then(() => {
      res.redirect('/')
    })
    .catch((err) => {
      console.log('An error ocurred when generating a celeb: ', err)
      res.redirect('/new')
    })
})

//DELETE

router.post('/:celebrityId/delete', (req, res, next) => {
  Celebrity.findByIdAndDelete(req.params.celebrityId)
    .then((result) => {
      res.redirect('/index')
    })
    .catch((err) => {
      console.log('An error occurred when deleting a celeb entry: ', err)
      next()
    })
})

module.exports = router
