const express = require('express');
const router  = express.Router();

const Celebrity = require('./../models/Celebrity');

// GET   /celebrities

router.get('/:id', function(req, res, next) {
        
    console.log("Estoy aqui", req.params.id);
    
    
    Celebrity.findById(req.params.id)
    .then( (oneCelebrity) => {
        res.render("celebrities/show", { oneCelebrity })
    })
    .catch( (err) => console.log(err));
});

router.get('/', function(req, res, next) {
    Celebrity.find()
      .then(allCelebritiesFromDB => {
        res.render('celebrities', { allCelebritiesFromDB });
      })
      .catch(err => console.log(err));
  });

  

  module.exports = router;