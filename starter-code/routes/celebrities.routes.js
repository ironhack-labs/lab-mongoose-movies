const express = require('express')
const router = express.Router()

const Celebrity = require('../models/celebrity.model')



//02. Celebrities - List
router.get('/', (req, res, next) => {

  Celebrity
    .find({}, { name: 1 })
    .sort({ name: 1 })
    .then(allCelebs => res.render('celebrities/index', { allCelebs }))
    .catch(err => console.log(err))
})



//03. Celebrities - Details
router.get('/show/:id', (req, res, next) => {
  const celebId = req.params.id

  Celebrity
    .findById(celebId)
    .then(theCeleb => res.render('celebrities/show', theCeleb))
    .catch(err => console.log(err))
})



//04. Celebrities - Creating
router.get('/new', (req, res, next) => res.render('celebrities/new'))

router.post('/new', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body


  if (name.length === 0 || occupation.length === 0 || catchPhrase.length === 0) {
    res.render('celebrities/new', { errMsg: 'All the fields are required.' })
    return
  }


  Celebrity
    .findOne({ name })
    .then(celeb => {

      if (celeb) {
        res.render('celebrities/new', { errMsg: 'Celebrity already in the database' })
        return
      }

      Celebrity
        .create({ name, occupation, catchPhrase })
        .then(() => res.render('celebrities/new', { succMsg: 'Register completed' }))
        .catch(err => console.log(err))
    })
})



//05. Celebrities - Deleting
router.post('/:id/delete', (req, res, next) => {

  const celebId = req.params.id

  Celebrity
    .findByIdAndDelete(celebId)
    .then(() => res.redirect('/celebrities'))
    .catch(err => console.log(err))
})



//06. Celebrities - Editing
router.post('/:id/edit', (req, res, next) => {

  const { name, occupation, catchPhrase } = req.body
  const celebId = req.params.id

  Celebrity
    .findByIdAndUpdate(celebId, req.body)
    .then(celebInfo => res.redirect('/celebrities/show/${ celebId }'))
    .catch(err => console.log(err))
})


module.exports = router

