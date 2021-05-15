const express = require('express');
const router  = express.Router();

const Celeb = require('../models/Celebrity.model')

router.get('/celebrities', (req, res, next) => {
    Celeb.find()
        .then(c => res.render('celebrities/index', {c}))
        .catch(err => next(err))
});

router.get('/celebrities/new', (req, res, next)=>{
    res.render('celebrities/new')
})

router.post('/celebrities/new', (req, res) => {
    const {name, occupation, catchPhrase} = req.body;
    Celeb.create({name, occupation, catchPhrase})
        .then(() => {
            res.redirect('/celebrities')
        })
        .catch(error => next(error));
});

router.get('/celebrities/:id', (req, res, next)=>{
    const {id}= req.params;
    Celeb.findById(id)
        .then(person => res.render('celebrities/show', {person: person}))
        .catch(err => next(err))
})

router.post('/celebrities/:id/delete', (req, res, next) => {
    const { id } = req.params;
  
    Celeb.findByIdAndDelete(id)
      .then(()=> res.redirect('/celebrities'))
      .catch(err => next(err))
  });



module.exports = router;