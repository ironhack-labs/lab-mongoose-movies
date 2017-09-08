const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity');

router.get('/', (req, res, next) => {
  Celebrity.find({}, (err, celebs) => {
    if (err) {
      return next(err)
    }
    res.render('celebrities/index', {
      title: 'The Best Celebrities:',
      celebs: celebs
    })
  })
})

router.get('/:id', (req, res, next) => {
  const celebId = req.params.id;
  Celebrity.findById(celebId, (err, celebrity) => {
    if (err) {
      return next(err)
    }
    res.render('celebrities/show', {
      celebs: celebs
    });
  })
})

router.get('/new', (req, res) => {
  res.render('celebrities/new', {
    title: "add a celebrity"
  })
})

router.post('/new',(req,res, next)=>{
  const added = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchphrase: req.body.catchphrase
  }
  const newCelebrity = new Celebrity(added);
  newCelebrity.save( (err)=>{
    if (err){ return next(err);}
    return res.redirect('/')
  });
})
