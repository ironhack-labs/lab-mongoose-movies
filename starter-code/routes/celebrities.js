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

module.exports = router
