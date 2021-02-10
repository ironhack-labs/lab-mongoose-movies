const express = require('express');
const router  = express.Router();

const { create, findById } = require('../models/Celebrity.model');
const Celebrity= require('../models/Celebrity.model')


/* GET home page */
 router.get('/', (req, res, next) => {
   res.render('index');
 });

 //añadir nueva celebridad
router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new')
})

router.post('/celebrities/new', (req, res, next) => {
  console.log(req.body)
  const newCeleb= {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  }
  console.log(newCeleb)
Celebrity.create(newCeleb)
.then((newCeleb)=>{
  console.log(`artist created: ${newCeleb}`)
    res.redirect("/celebrities")
})
.catch((error)=> console.log(error))
})

//eliminar celebridades
router.post('/celebrities/delete/:id', (req, res, next) => {
console.log(req.params)
const id= req.params.id
Celebrity.findByIdAndRemove(id)
.then((celebDeleted)=>{
  res.redirect("/celebrities")
})
.catch((error)=> {
  next(error)
})
})


 //lista de celebridades
router.get('/celebrities', (req, res, next) => {
  Celebrity.find({})
  .then((foundCelebs) => {
    //console.log(foundCelebs)
  res.render('celebrities/index', {foundCelebs});
})
.catch(error=> console.log(error))
})


//detalles de las celebridades
router.get('/celebrities/:id', (req, res, next) => {
  const id= req.params.id
   Celebrity.findById(id)
   .then((foundCeleb)=>{
    console.log(foundCeleb)
     res.render('celebrities/show', {foundCeleb})
   })
 .catch(error => console.log(error));
 })



module.exports = router;
