const express = require('express')
const router = express.Router()

const Celebrity = require('../models/Celebrity')

//lista de libros
router.get('/index', (req, res, next) => {
  Celebrity.find({})
    .then(icons => {
      res.render('list', { celebrities: icons })
      console.log({ celebrities: icons })
    })
    .catch(err => {
      next()
      console.log(`There was an error:`, err)
    })
})

module.exports = router
