const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const celebritySchema = require('../models/Celebrity'); //importo el modelo
const Celebrity = mongoose.model('Celebrity', celebritySchema);

//iteración 2. Find all
router.get('/', (req, res, next) => {
  Celebrity.find()       
   .then((celebrities) => {
     res.render('celebrities/index', {celebrities});
     console.log(celebrities);
    
   })
   .catch(error => {

     //console.log('Error:', error)
     next(error)
   })
})

//iteración 4, AddNew
router.get('/new', (req, res, next) => {
  res.render('celebrities/new', )
})

router.post('/', (req, res, next) => {
  console.log('post', req.body);
  const celebrity = req.body
  Celebrity.create(celebrity)
  .then(()=>{
    res.redirect('/celebrities')
  })
  .catch((error)=> {
    next(error)
  })
  //res.send('hola');
})


//iteración 5, delete
router.post('/:id/delete', (req, res, next) => {
  const id = req.params.id
  Celebrity.findByIdAndDelete(id)
  .then(result => {
    res.redirect('/celebrities');
  })
  .catch(error => {
    next(error)
  })
})

//iteración 6, update
router.get('/:id/edit', (req, res, next) => {
  const id = req.params.id
  Celebrity.findById(id)
  .then(celebrity => {
    res.render('celebrities/edit', {celebrity: celebrity})
  })

})
router.post('/:id', (req, res, next) => {
  const celebrity = req.body;
  const id = req.params.id;

  Celebrity.findByIdAndUpdate(id, celebrity)
  .then((result) => {
    res.redirect(`/celebrities/${id}`);
  })
  .catch(error => {
    console.log(error);
  })
})


// iteración 3, FindById
router.get('/:id', (req, res, next) => {
  const id = req.params.id; 
  Celebrity.findById(id)
  .then((celebrity) => {
    res.render('celebrities/show', {'celebrity': celebrity});
    console.log(celebrity)
  })
  .catch(error => {
    next(error);
  })
})


module.exports = router;