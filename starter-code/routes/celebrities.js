const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/celebrity.js');

router.get('/celebrities', (req, res) => {
  Celebrity.find() 
    .then(allCelebs => {
      //console.log(allCelebs)
      res.render('celebrities/index', {celebs: allCelebs});  
    });
});

router.get('/celebrities/:id', (req, res) => {
  const id = req.params.id;
  Celebrity.findById(id) 
    .then(celeb => {
      console.log(celeb)
      res.render('celebrities/show', celeb);  
    })
    .catch(error => {
      console.error('Error ', error);
    });
});


router.get('/celebrities/new', (req, res) => res.render('celebrities/new')); 

// router.post('/celebrities/new', (req,res) => {
//   const {name, occupation, catchPhrase} = req.body;

//   const newCeleb = new Celebrity({name, occupation, catchPhrase});
  
//   newCeleb.save( ()=> {
//     res.redirect('/celebrities');
//   });

// });

module.exports = router;