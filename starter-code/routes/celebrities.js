const express = require('express');
const { render, response } = require('../app');
const router  = express.Router();
const Celebrity = require('../models/celebrity')

/* GET home page */
router.get('/', (req, res, next) => {
  Celebrity.find()
  .then(allCelebs =>{
    console.log("All celebs:", allCelebs)
    res.render('../views/celebrities/index', {celebs: allCelebs})
  })
  .catch(err => console.log('There has been an error: ', err))
});

router.get('/new', (req,res) => {
  res.render('../views/celebrities/newCeleb')
});

router.get('/:id', (req,res,next) => {
  const {id} = req.params
  Celebrity.findById(id)
  .then(specificCeleb => {
    res.render('../views/celebrities/celebsPage', specificCeleb)
  })
  .catch(err => console.log('There has been an error: ', err))
});

router.post('/:id/delete', (req,res) => {
  const {id} = req.params
  Celebrity.findByIdAndDelete(id)
  .then( () =>{
    console.log('Celeb is removed')
    res.redirect('/celebrities')
  })
})

router.post('/', (req,res) => {
  const {name, occupation, catchPhrase} = req.body
  Celebrity.create({
    name,
    occupation,
    catchPhrase
  })
  .then(newCeleb => {
    console.log('New celeb added: ', newCeleb)
    res.redirect('/celebrities')
  })
  .catch(err => console.log('Some error has occurred ',err ))
})

module.exports = router;
