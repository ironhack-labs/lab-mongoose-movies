const express = require('express')
const router  = express.Router()
const Celebrities = require("../models/Celebrities.js") //Llamamos al modelo (al export de models celebrities)


//CREATE
router.post('/new', (req, res, next) => {
  const newCelebrity = new Celebrities({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  })
  newCelebrity.save()
    .then( result =>  res.redirect('/celebrities'))
    .catch( err =>   console.log("Error al crear celebrity"))
})

//READ
router.get('/', (req, res, next) => {
  Celebrities.find()
  .then(result => res.render('celebrities/celebrities.ejs', {celebrities:result}))
  .reject(err => console.log(err))
})
router.get('/new', (req, res, next) => res.render("celebrities/new.ejs"))

//UPDATE
router.get('/:id', (req,res, next) => {
  Celebrities.findById(req.params.id)
    .then(result => res.render('celebrities/update.ejs', {celebrity:result}))
    .reject (err => console.log(err));
})

router.post('/update/:id', (req, res, next) => {
  const update = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase:req.body.catchPhrase
  }
  Celebrities.findByIdAndUpdate(req.params.id , update)
    .then(result => res.redirect('/celebrities'))
    .catch(err => console.log ("Error al crear Celebrity"))
});

//DELETE
router.get('/delete/:id', (req, res, next) => {
  Celebrities.findByIdAndRemove(req.params.id)
    .then( result =>  res.redirect('/celebrities'))
    .reject( err => console.log(err));
});


module.exports = router;
//catch() cuando creamos en la base de datos
//reject()para hacer una busqueda en la base de datos y que nos devuelva algo
