var express = require('express')
var router = express.Router()
const Celebrity = require('../models/Celebrity')

// RETRIEVE: Celebrity list
router.get('/celebrities', (req, res, next) => {
  Celebrity.find({}, (err, celebrities) => {
    if (err) { return next(err) }

    res.render('celebrities/index', {
      title:'Celebrities',
      celebrities: celebrities
    })
  })
})

router.get('/celebrities/:id', (req, res, next) => {
  const celebrityId = req.params.id

  Celebrity.findById(celebrityId, (err, celebrity) => {
    if (err) { return next(err) }

    res.render('celebrities/show', {
      title:'Celebrity Detail',
      celebrity: celebrity
    })
  })
})

module.exports = router
