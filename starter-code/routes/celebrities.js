const express   = require('express');
const router    = express.Router();
const Celebrity = require('../models/Celebrity')

router.get('/', (req, res, next) => {
  Celebrity.find()
    .then(celebrities => res.render('celebrities/all', { celebrities }))
    .catch(err => console.log(err))
})

router.get('/new', (req, res, next) => {
  const config = {
    title: 'New celebrity: ',
    action: '/celebrities/new',
    button: 'Create!',
    return: '/celebrities'
  }
  res.render('celebrities/new', config)
})

router.post('/new', (req, res, next) => {
  Celebrity.create({ ...req.body })
    .then(celebrity => res.redirect('/celebrities'))
    .catch(err => console.log(err))
})

router.post('/delete', (req, res, next) => {
  const { id } = req.body
  Celebrity.findByIdAndRemove(id)
    .then(celebrity => res.redirect('/celebrities'))
    .catch(err => console.log(err))
})

router.get('/edit/:id', (req, res, next) => {
  const { id } = req.params
  Celebrity.findById(id)
    .then(celebrity => {
      const config = {
        title: 'Edit celebrity: ',
        action: `/celebrities/edit/${id}`,
        button: 'Edit!',
        return: `/celebrities/${id}`,
        celebrity
      }
      res.render('celebrities/new', config)
    })
    .catch(err => console.log(err))
})

router.post('/edit/:id', (req, res, next) => {
  const { id } = req.params
  Celebrity.findByIdAndUpdate(id, {$set: { ...req.body } }, { new: true })
    .then(celebrity => res.redirect(`/celebrities/${celebrity._id}`))
    .catch(err => console.log(err))
})

router.get('/:id', (req, res, next) => {
  const { id } = req.params
  Celebrity.findById(id)
    .then(celebrity => res.render('celebrities/show', celebrity))
    .catch(err => console.log(err))
})

module.exports = router