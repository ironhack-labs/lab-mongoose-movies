var express = require('express')
var router = express.Router()
const Celebrity = require('../models/Celebrity')

// RETRIEVE: Celebrity list
router.get('/', (req, res, next) => {
  Celebrity.find({}, (err, celebrities) => {
    if (err) { return next(err) }

    res.render('celebrities/index', {
      title:'Celebrities',
      celebrities: celebrities
    })
  })
})

module.exports = router
