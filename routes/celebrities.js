const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity.js')


router.get('/', (req, res, next) => {
  res.render('index');
});



router.get('/celebrities', (req, res, next) => {

  Celebrity.find().then(data => {
    res.render('celebrities/index', {celebs: data})
  }).catch(err => next(err))
})



router.get('/celebrities/single/:id', (req, res, next) => {
  let id = req.params.id

  Celebrity.findById(id).then(data => {
    res.render('celebrities/show', {celeb: data})
  }).catch(err => next(err))

})


router.get('/celebrities/new', (req,res, next) => {
  res.render("celebrities/new")
})

router.post('/celebrities/create', (req, res, next) => {
    Celebrity.create(
      {
        name: req.body.name,
        occupation: req.body.occupation,
        catchPhrase: req.body.catchPhrase
      }
    ).then(data => {
      res.redirect(`/celebrities/single/${data._id}`)
    })
})

router.post('/celebrities/delete/:id', (req, res, next) => {
  let id = req.params.id
  Celebrity.findByIdAndDelete(id).then(data =>{
    res.redirect(`/celebrities`)
  })
})

router.get('/celebrities/edit/:id', (req, res, next) => {
  let id = req.params.id
  Celebrity.findById(id).then(celeb => {
    res.render("celebrities/edit", {celeb: celeb})
  }).catch(err => next(err))
})


router.post('/celebrities/update/:id', (req,res,next) => {
  let id = req.params.id
  let name = req.body.name
  let occupation = req.body.occupation
  let catchPhrase = req.body.catchPhrase

  Celebrity.findByIdAndUpdate(id, {
    name: name, 
    occupation: occupation, 
    catchPhrase: catchPhrase
  }).then((data) =>{
    res.redirect("/celebrities")
  }).catch(err => next(err))
})



module.exports = router;