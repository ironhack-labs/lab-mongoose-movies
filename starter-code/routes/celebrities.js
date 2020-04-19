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

//Iteration #4: Adding New 

router.get('/new', (req, res, next) => res.render('celebrities/new'))
router.post('/new', (req, res, next) => {
  console.log('entra post')
  const { name, occupation, catchPhrase } = req.body

  Celebrity.create({ name, occupation, catchPhrase })
    .then((res.redirect('/celebrities')))
    .catch(err => console.log("Error while retrieving new celebrity", err))

})

//Iteration #5: Deleting 

// Edit documents
router.post('/:id/delete', (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then(theCelebrityDelate => res.redirect('/celebrities'))
    .catch(err => console.log("Error while deleting the celebrity", err))
})

//Iteration #6(Bonus): Editing 
router.get('/:id/edit', (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrityEdit => res.render('celebrities/edit', celebrityEdit))
    .catch(err => {
      next()
      console.log('Error while retrieving celebrities: ', err)
      return err
    })
})
router.post('/:id', (req, res, next) => {

  const { name, occupation, catchPhrase } = req.body

  Celebrity.findByIdAndUpdate(req.params.id, { name, occupation, catchPhrase }, { new: true })
    .then(updateCelebrity => {
      console.log(updateCelebrity)
      res.redirect(`/celebrities/details/${updateCelebrity._id}`)
    })
    .catch(err => {
      next()
      console.log('Error while retrieving celebrities: ', err)
      return err
    })
})

module.exports = router;