const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity.js')

router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new')
})

router.post('/celebrities/new', (req, res, next) => {
  Celebrity.create(req.body).then(_ => {
    res.redirect('/celebrities')
  })
})

  
router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(allCelebrities => {
      res.render('celebrities/index', {
        allCelebrities
      })
    })
    .catch(err => next(err))
  console.log('error');
})

router.get('/celebrities/:id', (req, res, next) => {

  const id = req.params.id
  console.log(req.params)

  Celebrity.findById(id)
    .then(oneCelebrity => {
      res.render('celebrities/show', oneCelebrity);
    })
    .catch(err => console.log('err'))
});

router.get("/celebrities/edit/:id", (req, res) => {
  const id = req.params.id

  Celebrity.findById(id)
    .then(data => res.render('celebrities/edit', data))

});

router.post('/celebrities/:id/', (req, res, next) => {
  Celebrity
    .findByIdAndUpdate({
      _id: req.params.id
    }, req.body)
    .then(updatedCeleb => {
      res.redirect('/celebrities')
    })
    .catch(err => {
      next();
      console.log(`There has been an error creating the new celeb: \n ${err}`);
    })
})

router.post('/celebrities/delete/:id', (req, res, next) => {
  const id = req.params.id

  Celebrity.findByIdAndDelete(id)
    .then(_ => res.redirect('/celebrities'))
})



module.exports = router;