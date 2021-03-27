const express = require('express');
const Celebrity = require('../models/celebrity');

const router  = express.Router();

router.get('/celebrities/index', (req, res, next) => {
  const celebs =  Celebrity.find()
  
  .then(celebs => {
    res.render('./celebrities/index', {celebs})
  })
  
  .catch(err => {
    next(err);
    return err;    
  }) 
})

router.get('/celebrities/new', (req, res, next) => {
    res.render('./celebrities/new')
});
  


router.post('/celebrities', (req, res, next) => {
  const newCelebrity = req.body;
  
  Celebrity.create(newCelebrity)
  
  .then(() => {
    res.redirect('/celebrities/index')
  })
  
  .catch(err => {
    next(err);
    return err;    
  }) 
})


router.get('/celebrities/:id', (req, res, next) => {
  const { id } = req.params;
  const { celebDetail } = req.body;
  
  Celebrity.findById(id)
  
  .then(celebDetail => {
    res.render('./celebrities/show', {celebDetail})
  })
  
  .catch(err => {
    next(err);
    return err;    
  }) 
})

router.get('/celebrities/:id/edit', (req, res, next) => {
  const { id } = req.params;

  const { celebDetail } = req.body;

  Celebrity.findById(id)
  .then(celebDetail => {
    res.render('./celebrities/edit', { celebDetail })
  })

  .catch(err => {
    next(err);
    return err;    
  }) 
})

router.post('/celebrities/:id/edit', (req, res, next) => {
  const updatedCeleb = req.body;
  const { id } = req. params;

  Celebrity.findByIdAndUpdate(id, updatedCeleb)

  .then(() => {
    res.redirect('/celebrities/index')
  })

  .catch(err => {
    next(err);
    return err;    
  }) 
})

router.post('/celebrities/:id/delet', (req, res, next) =>{
  const { id } = req.params;
  
  Celebrity.findByIdAndDelete(id)
  .then(() => {
    res.redirect('/celebrities/index')
  })

  .catch(err => {
    next(err);
    return err;    
  }) 
})

module.exports = router;
