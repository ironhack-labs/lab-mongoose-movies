const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity')


router.get('/', (req, res, next) => {
  
  Celebrity.find()
  .then(celebrities => {
    // console.log(celebrities)
    res.render('celebrities/index', {celebrities});
  })
  .catch(err =>  next(err))
  
});

router.get('/new', (req, res) => res.render("celebrities/new"))



// router.get('/celebrities', (req, res) => res.render("show"))

router.post('/new', (req, res) => {

  console.log("bleah")

  const {name, occupation, catchPhrase} = req.body
  const celebrity = new Celebrity({name, occupation, catchPhrase})


  celebrity.save()
    .then(thenewcelebrity  => res.redirect('/celebrities'))
    .catch(error      => res.redirect("/celebrities/new"))
})



router.get('/:id/delete', (req, res, next) => {

  Celebrity.findByIdAndRemove(req.params.id)
  .then(() => res.redirect('/celebrities'))
  .catch(err =>  next(err))
})


router.get('/edit/:id', (req, res, next) => {

  Celebrity.findById(req.params.id)
  
  .then(celebrity   => {
    console.log("yaaay")
    console.log(celebrity)
    res.render('celebrities/celebrity-edit', {celebrity})})
  .catch(err =>  next(err))
})


router.post('/edit/:id', (req, res, next) => {
  console.log("entra")

  const {name, occupation, catchPhrase} = req.body

  Celebrity.update({_id: req.params.celebrity_id},  { $set: {name, occupation, catchPhrase }})
  .then(()   => res.redirect('/celebrities'))
  .catch(err =>  next(err))
})

router.get("/:id", (req, res, next) => {
  console.log(req.params.id);
  console.log("pepepepepe")

  Celebrity.findById(req.params.id)
    .then(celebrity=> {
      console.log(celebrity);
      res.render("show", {celebrity})
    })

    .catch(err =>  next(err))

})





module.exports = router;
