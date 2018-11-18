const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity.js');


router.get('/celebrities', (req, res, next) => {
  
  Celebrity.find()
    .then(celebrities => {
      console.log(celebrities);
      res.render("celebrities/index", { celebrities });
    })
    .catch(error => {      
      console.log(error);
      next(err);
    })  
});

router.get('/celebrities/:id', (req, res, next) => {  

  Celebrity.findById(req.params.id)
      .then(celebrity => {
          console.log(celebrity);
          res.render('celebrities/show', { celebrity })
      })
      .catch(err => {
          console.error(err);
      })  
});

module.exports = router;