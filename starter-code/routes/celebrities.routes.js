const express = require('express')
const router = express.Router()

const Celebrities = require('./../models/celebrities.model')

// Endpoints


// SHOW ALL STAR

router.get('/', (req, res) => {
  
  Celebrities
    .find()
    .then(allCelebrities => res.render('celebrities/celebrities', { allCelebrities })) 
    .catch(err => console.log(err))
})


//DETAILS STAR


router.get('/show/:celebrities_id', (req, res) => {
  
  const celebritiesID = req.params.celebrities_id

  Celebrities
    .findById(celebritiesID)
    .then(theStar => res.render('celebrities/show', theStar))
    .catch(err => console.log(err))

})


// NEW STAR

router.get('/new', (req, res) => res.render('celebrities/new'))

router.post('/new', (req, res) => {

    const { name, occupation, catchPhrase } = req.body

    Celebrities
      .create({name, occupation, catchPhrase})
      .then(() => res.redirect('/celebrities'))
      .catch(err => console.log('Error:', err))
})
  

// DELETE STAR

router.get('/delete-star', (req, res) => res.render('celebrities/delete-star'))


router.get('/delete', (req, res) =>

{
  const celebritiesID = req.query.celebrities_id

  Celebrities
    .findByIdAndDelete(celebritiesID)
    .then(() => res.redirect('/celebrities/delete-star'))
    .catch(err => console.log(err))
})


// EDIT STAR


router.get('/edit/:celebrities_id', (req, res) => {
  
  const celebritiesID = req.params.celebrities_id

  Celebrities
    .findById(celebritiesID)
    .then(theStar => res.render('celebrities/edit', theStar))
    .catch(err => console.log(err))

})

router.post('/edit', (req, res) => {

  const celebritiesID = req.query.celebrities_id                     

  const { name, occupation, catchPhrase } = req.body   

  Celebrities
    .findByIdAndUpdate(celebritiesID, { name, occupation, catchPhrase })
    .then(theStar => res.redirect('/celebrities'))
    .catch(err => console.log(err))
})



module.exports = router
