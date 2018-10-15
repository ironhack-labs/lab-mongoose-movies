const express = require('express');
const router = express.Router();
const Celebrities= require('../models/Celebrity');

/* GET users listing. */
router.get('/', (req, res, next) => {
  Celebrities.find()
  .then (celebrities =>{
    res.render('celebrities/index', {celebrities});
  })
  .catch((error) =>{
    console.log(error);
  })
});

// create
router.get('/new' ,(req,res,next) =>{
  res.render('celebrities/new');
})

router.post('/', (req, res, next) => {
  const info = req.body;
  console.log(info);
  Celebrities.collection.save(info)
  .then (result =>{
    res.redirect('celebrities');
  })
  .catch((error) =>{
    console.log(error);
  })
});

// delete  celebry
router.post('/:id/delete', (req,res,next) =>{
  const id= req.params.id;
  Celebrities.findByIdAndDelete(id)
  .then(result => {
    res.redirect('/celebrities');
  })
  .catch(error => {
    console.log(error);
  })
})

//edit
router.get('/:id/edit' ,(req,res,next) =>{
  const id = req.params.id
  Celebrities.findById(id)
  .then((celebrities) =>{
    res.render('celebrities/edit', {celebrities});
  })
  .catch((error) => {
    Console.log(error);
  })
})
router.post('/:id', (req,res,next) =>{
  const id= req.params.id;
  const info= req.body;
  console.log(id);
  Celebrities.findByIdAndUpdate(id, info)
  .then(result => {
    res.redirect('/celebrities');
  })
  .catch(error => {
    console.log(error);
  })
})


//list
router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  Celebrities.findById(id)
  .then (celebrities =>{
    res.render('celebrities/show', {celebrities: celebrities});
  })
  .catch((error) =>{
    console.log(error);
  })
});





module.exports = router;
