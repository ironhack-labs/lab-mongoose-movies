const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// /celebrities - LISTAR
router.get('/', (req, res) => {

  Celebrity.find()
  .then((celebrities) => {
    console.log("Llega");
    res.render('celebrities/index',{celebrities});
  })
  .catch((error) => {
    console.log("Error", error);
  })
})


// ADD  CELEBRITIE - Aquií llama al formulario
router.get('/new', (req,res) => {
  res.render('celebrities/new');

})


// /celebrities/:id - LISTAR
router.get('/:id', (req,res) => {
  const id = req.params.id;

    Celebrity.findById(id)
    .then((celebrity) => {
      res.render('celebrities/show',{celebrity});
    })
    .catch((error) => {
      console.log(error);
    })
})



// ADD  CELEBRITIE - Aqui recible los datos del formulario por POST
router.post('/', (req, res) => {
  const celeb = req.body;

  Celebrity.create(celeb)
  .then((celebrity) =>{
    console.log(celebrity);
    res.redirect('/celebrities');
  })
})


// Delete 
router.post('/:id/delete', (req,res) => {
  const id = req.params.id;

  Celebrity.findByIdAndDelete(id)
  .then((result) => {
   res.redirect('/celebrities');
  })
  .catch((error) => {
    console.log(error);
  })
})

// EDIT
router.get('/:id/edit', (req, res) => {
  const id = req.params.id;

  Celebrity.findById(id)
  .then((celeb) => {
    res.render('celebrities/edit', {celeb})
  })
  .catch((error) => {
    res.redirect('/celebrities');
  })

})

router.post('/:id', (req, res) => {
  const celeb = req.body;
  const id = req.params.id;

  Celebrity.findByIdAndUpdate(id, celeb)
  .then((result) => {
    res.redirect('/celebrities');
  })
  .catch((error) => {
    console.log(error);
  })

})


module.exports = router;
