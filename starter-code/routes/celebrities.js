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
  if (id.match(/^[0-9a-fA-F]{24}$/)) {
    // Yes, it's a valid ObjectId, proceed with `findById` call.
  
    Celebrity.findById(id) 
      .then(celeb => {
        console.log(celeb)
        res.render('celebrities/show', celeb);  
      })
      .catch(error => {
        console.error('Error ', error);
      });
    }
});


router.get('/celebrities/new', (req, res) => res.render('celebrities/new')); 

router.post('/celebrities/new', (req, res, next) => {
  const {name, occupation, catchPhrase} = req.body;

  const newCeleb = new Celebrity({name, occupation, catchPhrase});
  
  newCeleb.save()
  .then(()=> {
    res.redirect('/celebrities');
  })
  .catch((error) => {
    next(error);
  });

});

module.exports = router;