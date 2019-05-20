const express = require('express');
const router  = express.Router();

const mongoose = require('mongoose')
const dbName = 'lab-mongoose-movies'
mongoose.connect(`mongodb://localhost/${dbName}`)

const Celebrity = require('../models/celebrity')




/* GET home page */
router.get('/', (req, res, next) => {
  //console.log("calling")
  Celebrity.find()                                                         // ESTO ES EL MODELO
    .then((allCelebs) => {
      //console.log(allCelebs)
      res.render('celebrities/index', {allCelebs})})  // ESTO ES LA VISTA
    .catch(error => console.log(error))

})



router.get('/view/:_id', (req, res, next) => {
  console.log(req.params.celeb_id)
  Celebrity.findById(req.params._id)
  .then((celeb) => {
    console.log({celeb})
    res.render('celebrities/show', {celeb})
  })
  .catch(error => console.log(error))
})



router.get('/new', (req, res, next) => res.render('celebrities/new'))
router.post('/new', (req, res, next) => {
  console.log(req.body)
  const { name, occupation, catchPhrase } = req.body
  const newCeleb = new Celebrity({ name, occupation, catchPhrase })
  newCeleb.save()
    .then((theCeleb) => {
      
      res.redirect('/celebrities')
    })
    .catch(error => console.log(error))
})


router.post('/:_id/delete', (req, res, next) => {
  console.log('pepe')
  Celebrity.findByIdAndRemove(req.params._id)
  .then(book => res.redirect('/celebrities'))
  .catch(error => console.log(error))
})




module.exports = router;
