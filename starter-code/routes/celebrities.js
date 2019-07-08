const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/Celebrity');

router.get('/celebrities', (req, res) => {
    Celebrity.find()
      .then( celebrity => {
        res.render('celebrities/index', {celebrity})
      })
      .catch(err => {
        console.log(err)
        res.redirect('/')
      })
  })
  
  router.post('/celebrities', (req, res) => {
    const { name, occupation, phrase } = req.body;
  
    if(!name) {
      res.redirect('/celebrities/new')
    }
  
    Celebrity.create({
      name,
      occupation, 
      catchPhrase: phrase
    })
      .then( () => {
        console.log('saved !')
        res.redirect('/celebrities')
      })
      .catch( err => {
        console.log(err)
      })
  })
  
  router.get('/celebrities/new', (req, res) => {
    res.render('celebrities/add')
  })
  
  router.get('/celebrities/:id', (req, res) => {
    const id = req.params.id;
  
    Celebrity.findById(id)
      .then( celebrity => {
        res.render('celebrities/show', celebrity)
      })
  })
  
  router.post('/celebrities/:id', (req, res) => {
    const id = req.params.id;
  
    if(!req.body.name) {
      res.redirect(`/celebrities/${req.params.id}/edit`);
      return
    }
  
    const newData = {
      name: req.body.name,
      occupation: req.body.occupation,
      catchPhrase: req.body.phrase
    }
  
    Celebrity.findByIdAndUpdate(id, newData)
      .then(() => {
        console.log('Updated !')
        res.redirect('/celebrities')
      })
      .catch(err => {
        console.log(err)
      })
  })
  
  router.post('/celebrities/:id/delete', (req, res) => {
    const id = req.params.id;
  
    Celebrity.findByIdAndRemove(id)
      .then(() => {
        console.log('deleted !')
        res.redirect('/celebrities')
      })
      .catch(err => {
        console.log(err)
      })
  })
  
  router.get('/celebrities/:id/edit', (req, res) => {
    const id = req.params.id
  
    Celebrity.findById(id)
      .then(celeb => {
        res.render('celebrities/edit', celeb)
      })
      .catch(err => {
        console.log(err)
      })
  })


  module.exports = router