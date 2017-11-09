const express = require('express');
const Celebrity = require('../models/celebrity');

const router  = express.Router();



router.get('/', (req, res, next) => {

  Celebrity.find({}, (err, celebrities) => {
      if (err) { return next(err) }
      res.render('celebrities/index', {
        celebrities: celebrities
      });
    });
  });

  router.get('/new', (req, res, next) => {
    res.render('celebrities/new', {
      celebrity: new Celebrity()
    });
  });

  router.post('/', (req, res, next) => {
    const celebrityInfo = {
      name: req.body.name,
      occupation: req.body.occupation,
      catchPhrase: req.body.catchPhrase,
      
    };
    
    
    const newCelebrity = new Celebrity(celebrityInfo);
  
    newCelebrity.save((err) => {
      if (err) {
        return res.render('celebrities/new', {
          celebrity: newCelebrity
        })
      }
  
      return res.redirect('/celebrities');
    });
  });

  router.get('/:id', (req, res, next) => {
    let id = req.params.id
  
    Celebrity.findById(id, (err, celebrities) => {
      res.render('celebrities/show', {
        celebrities: celebrities
      })
    })
  });  

  module.exports = router;