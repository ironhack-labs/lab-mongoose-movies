const express = require('express');
const router  = express.Router();
let Celebrity = require('../models/Celebrity')


router.post('/:id/delete', (req, res, next) => {
  Celebrity.findByIdAndDelete(req.params.id)
  .then(()=>{
    res.redirect('/celebrities')
  })
  .catch(e=>next(e))
})


router.post('/new', (req, res, next) => {
  Celebrity.create(req.body)
  .then(()=>{
    res.redirect("/celebrities")
  })
  .catch(()=>res.render("celebrities/new", {message:"Error: try again"}))
})

router.get('/new', (req, res, next) => {
  res.render('celebrities/new')
})


router.get('/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
  .then(celeb=>{
    res.render('celebrities/show',celeb)
  })
  .catch(e=>next(e))
})


router.get('/', (req, res, next) => {
  Celebrity.find()
  .then(celebs=>{
    res.render('celebrities/index',{celebs})
  })
  .catch(e=>next(e))
});

module.exports = router;