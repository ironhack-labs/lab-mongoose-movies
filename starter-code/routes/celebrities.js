const router = require('express').Router()
const Celebrity = require('../models/Celebrity')

//Get all Celebs
router.get('/', (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      res.render('celebrities/', { celebrities })
    })
    .catch(err => {
      res.send(err)
    })
})

router.get('/new', (req, res, next) => res.render('celebrities/new'))
router.get('/edit/:id', (req, res, next) => {
  const { id } = req.params
  Celebrity.findById(id)
    .then(celebrity => res.render('celebrities/edit'))
    .catch(err => console.log(err))
})

//Show a Celeb
router.get('/:id', (req, res, next) => {
  const { id } = req.params
  Celebrity.findById(id)
    .then(celebrity => {
      res.render('celebrities/show', celebrity)
    })
    .catch(err => console.log(err))
})
//Create a Celeb
router.post('/new', (req, res, next) => {
  Celebrity.create({ ...req.body })
    .then(celebrity => {
      res.redirect('/celebrities')
    })
    .catch(err => console.log(err))
})

//Delete a Celeb
router.post("/delete", (req, res, next) =>{
  const { id } = req.body
  Celebrity.findByIdAndRemove(id)
    .then(celebrity => {
      res.redirect('/celebrities')
    })
    .catch(err => console.log(err))
})

//Edit a Celeb
router.post('/edit/:id', (req, res, next) => {
  const { id } = req.params
  Celebrity.findByIdAndUpdate(id, {$set: { ...req.body } }, { new: true })
    .then(celebrity => {
      res.redirect(`/celebrities/${celebrity._id}`)
    })
    .catch(err => console.log(err))
})


module.exports = router