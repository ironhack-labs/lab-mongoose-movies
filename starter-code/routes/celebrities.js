const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity');

router.get('/', (req, res, next) => {
  console.log('ENTRA')

  Celebrity.find()
    .then(allCelebrities => {
      console.log('Celebrities', allCelebrities)
      res.render('celebrities', { allCelebrities })
    })
    .catch(err => {
      next()
      console.log('Error while retrieving celebrities: ', err)
      return err
    })
});


router.get('/details/:id', (req, res, next) => {

  Celebrity.findById(req.params.id)
    .then(theCelebrity => res.render('celebrities/show', theCelebrity))
    .catch(err => console.log("Error while retrieving celebrity details", err))
})

//Iteration #4: Adding New Celebrities

router.get('/new', (req, res, next) => res.render('celebrities/new'))
router.post('/new', (req, res, next) => {
  console.log('entra post')
  const { name, occupation, catchPhrase } = req.body

  Celebrity.create({ name, occupation, catchPhrase })
    .then((res.redirect('/celebrities')))
    .catch(err => console.log("Error while retrieving new celebrity", err))

})

//Iteration #5: Deleting Celebrities

// Edit documents
router.post('/:id/delete', (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then(theCelebrityDelate => res.redirect('/celebrities'))
    .catch(err => console.log("Error while retrieving new celebrity", err))
})


module.exports = router;