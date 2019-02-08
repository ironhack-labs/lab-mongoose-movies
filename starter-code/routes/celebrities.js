let router = require('express').Router()
let Celebrity = require('../models/Celebrity')

//Edit
router.post('/:id/edit', (req,res,next) => {
  const {id} =  req.params
  Celebrity.findByIdAndUpdate(id, req.body)
  .then(celebrity => res.redirect('/celebrities/' + id))
  .catch(e=> next(e))
})

router.get('/:id/edit', (req,res,next) => {
  Celebrity.findById(req.params.id)
  .then(celebrity => res.render('celebrities/edit', celebrity))
  .catch(e=> next(e))
})
//Delete
router.post('/:id/delete', (req,res,next) => {
  Celebrity.findByIdAndRemove(req.params.id)
  .then(celebrity => res.redirect('/celebrities'))
  .catch(e=> next(e))
})

// New
router.post('/new', (req,res,next) => {
  Celebrity.create(req.body)
  .then(celebrity => res.redirect('/celebrities'))
  .catch(e=> {
    res.render('celebrities/new')
    next(e)})
})

router.get('/new', (req,res,next)=> {
 res.render('celebrities/new')
})
// Details
router.get('/:id', (req,res,next)=> {
  Celebrity.findById(req.params.id)
  .then(celebrity => {
    res.render('celebrities/show', celebrity)
  })
  .catch(e=> next(e))
})
// List
router.get('/', (req,res,next)=> {
  Celebrity.find()
  .then(celebrities => {
    res.render('celebrities/', {celebrities})
  })
  .catch(e=> next(e))
})

module.exports = router