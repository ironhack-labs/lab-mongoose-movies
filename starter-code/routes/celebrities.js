const CelebrityModel = require("../models/celebrity")

const express = require('express');

const router = express.Router();

/* Show all celebrities*/
router.get('/celebrities', (req, res, next) => {
  CelebrityModel.find()
    .then(celebritiesFromDB => {
      console.log(celebritiesFromDB)
      res.render('celebrities/index', {
        celebrities: celebritiesFromDB
      })
    })
    .catch(err => {
      console.log(err)
      next(err)
    })
})



router.get('/celebrities/new', (req, res, next) => res.render('celebrities/new'))

router.get('/celebrities/:id', (req, res, next) => {
  CelebrityModel.findById(req.params.id)
    .then(celebrity => {
      console.log(celebrity)
      res.render('celebrities/show', {
        celebrity
      })
    })
    .catch(err => {
      console.log(err)
      next(err)
    })
})
router.post('/celebrities', (req, res, next) => {
  console.log(req.body)
  CelebrityModel
    .create(req.body) 
    .then(newCelebrity => {
      console.log('El new celebrity es:', newCelebrity)
      res.redirect('/celebrities')
    })
    .catch(err => {
      console.log(err)
      res.render('celebrities/new')
    })

})

module.exports = router