const express   = require('express');
const router    = express.Router();
const mongoose  = require('mongoose')
const Celebrity = require('../models/Celebrity.model')



router.get('/', (req, res, next) => {
  Celebrity.find()
  .then(celebrities => {
    res.render('celebrities/index', {celebrities})
  })
  .catch(err => {
    next(err)
    console.error(err)
  })
})
router.post('/', (req, res, next) => {
    Celebrity.create(req.body)
    .then(result => {
        console.log(result)
        res.redirect('/celebrities')
    })
})

router.get('/new', (req,res, next) => {
  res.render('celebrities/new')
})

router.get('/:id', (req, res, next) => {
  const id = req.params.id
  Celebrity.findById(id)
  .then(celebrity => {
    res.render('celebrities/show', celebrity)
  })
  .catch(err => {
    console.error(err)
    next(err)
  })
})

router.post('/:id/delete', (req, res, next) => {
    const id = req.params.id
    Celebrity.findByIdAndRemove(id)
    .then(result => {
        console.log(result)
        res.redirect('/celebrities')
    })
    .catch(err => {
        console.error(err)
        next(err)
    })
})



module.exports = router;