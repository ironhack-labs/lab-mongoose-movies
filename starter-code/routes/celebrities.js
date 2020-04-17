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

router.get("/:celebrityId", (req, res, next) => {
  Celebrity.findById(req.params.celebrityId)
  .then((celebrity) => {
    res.render("celebrities/show", celebrity)
  }).catch((err) => {
    console.log("An error ocurred when fetching an specific celebrity by ID: ", err)
    next()
  });
})

module.exports = router
