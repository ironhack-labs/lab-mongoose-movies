const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity')

// Celebrity List
router.get('/', (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      res.render('celebrities/', { celebrities })
    }).catch(e => next(e))
})

//Celebrity details page
router.get('/detail/:id', (req, res, next) => {
  const { id } = req.params
  Celebrity.findById(id)
    .then(celebrity => {
      res.render('celebrities/show', celebrity)
    })
    .catch(e => {
      console.log(e)
      next(e)
    })
})

// Create new celebrity and post
router.get('/new', (req, res, next) => {
  res.render('celebrities/new')
})
router.post('/new', (req, res, next) => {
  Celebrity.create(req.body)
    .then(celebrity => {
      res.redirect('/celebrities')
    }).catch(e => next(e))
})


//Delete celebrities
router.get('/:id/delete', (req, res, next) => {
  const { id } = req.params
  res.render('celebrities/')
})
router.post('/:id/delete', (req, res, next) => {
  const { id } = req.params
  Celebrity.findByIdAndRemove(id)
    .then(celebrity => {
      res.redirect('/celebrities')
    }).catch(e => next(e))
})

// //Update celebrity
// router.get('/:id/edit', (req, res, next) => {
//   const { id } = req.params
//   Celebrity.findById(id)
//     .then(celebrity => {
//       res.render('celebrities/edit', celebrity)
//     }).catch(e => next(e))
// })

// router.post('/:id/edit', (req, res, next) => {
//   const { id } = req.params
//   Celebrity.findByIdAndUpdate(id, { $set: req.body }, { new: true })
//     .then(celebrity => {
//       res.redirect(`/celebrities/detail/${id}`)
//     }).catch(e => next(e))
// })


module.exports = router;