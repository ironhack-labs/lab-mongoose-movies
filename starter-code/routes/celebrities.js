const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity.js')

/* GET celebrities page with list of celebrities */
router.get('/', (req, res, next) => {
  
 Celebrity.find({})
 .exec()
 .then((celebList) =>{
   res.render('../views/celebrities/index', {celebList})
 })
 .catch(err => next(err))
})

/* GET details page of specific artists*/
router.get('/details', (req, res, next) => {
  Celebrity.findOne({_id: req.query.id})
  .then(celebDetails => {
    res.render('../views/celebrities/show', celebDetails)
  })
  .catch(err => next(err))
})

/* GET form to add new celebrity */
router.get('/new', (req, res, next) => {
  res.render('../views/celebrities/new')
})


/* POST retrieve data, create new celenbrity and store it in database */
router.post('/', (req, res, next) => {
  const {name, occupation, catchPhrase } = req.body
  const newCelebrity = new Celebrity({name, occupation, catchPhrase })
  newCelebrity.save()
  .then(() => {
    res.redirect('/celebrities')
  })
  .catch(() => {
    // console.log(err)
    res.redirect('/celebrities/new')
  })
})

/* POST retrieve id, find by id & delete */
router.post('/:id/delete', (req, res, next) => {
  Celebrity.findByIdAndRemove({_id: req.params.id})
  .then(() => {
    res.redirect('/celebrities')
  })
  .catch(err => next(err))
})

/* GET edit form */
router.get('/:id/edit', (req, res, next) => {
  Celebrity.findById({_id: req.params.id})
  .then((celebData) => {
    res.render('../views/celebrities/edit', celebData)
  })
  .catch(err => next(err))
})

/* POST update changes in database */
router.post('/:id', (req, res, next) => {
  const {name, occupation, catchPhrase} = req.body
  Celebrity.update({_id: req.params.id}, {$set: {name, occupation, catchPhrase}})
  .then(() => {
    res.redirect('/celebrities')
  })
  .catch(err => next(err))
})

module.exports = router