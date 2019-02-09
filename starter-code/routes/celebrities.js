
let router = require('express').Router()
let Celebtrity = require('../models/Celebrity')


router.post('/:id/edit', (req, res, next) => {
  const { id } = req.params
  Celebtrity.findByIdAndUpdate(id.req.body)
    .then(celeb => res.redirect('/celebrities/' + id))
    .catch(e => next(e))
})

router.get('/:id/edit', (req, res, next) => {
  Celebtrity.findById(req.params.id)
    .then(celeb => res.render('celebrities/edit', celeb))
    .catch(e => next(e))
})

router.post("/:id/delete", (req, res, next) => {
  Celebtrity.findByIdAndRemove(req.params.id)
    .then(celeb => {
      res.redirect('/celebrities')
    })
    .catch(e => next(e))
})

router.post("/new", (req, res, next) => {
  Celebtrity.create(req.body)
    .then(celeb => {
      res.redirect('/celebrities')
    })
    .catch(e => next(e))
})

router.get('/new', (req, res, next) => {
  res.render('celebrities/new')
})

router.get('/:id', (req, res, next) => {
  Celebtrity.findById(req.params.id)
    .then(celeb => res.render('celebrities/show', celeb))
    .catch(e => next(e))
})

router.get("/", (req, res, next) => {
  Celebtrity.find()
    .then(celebrities => {
      res.render('celebrities', { celebrities })
    })
    .catch(err => next(err))
})



module.exports = router