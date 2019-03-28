const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity');

router.get('/', (req, res) => {
  Celebrity.find()
    .then(celebrities => {
      res.render('celebrities/index', { celebrities: celebrities })
    })
    .catch(err => {
      console.log(`There has been an error retrieving the celebrities info: ${err}`)
    })
})

router.get('/:id/edit', (req, res) => {
  const {id} = req.params;
  Celebrity.findById(id)
    .then(celebrity => {
      res.render('celebrities/edit', celebrity)
    })
    .catch(err => {
      console.log(`There was an error retrieving the edit form: ${err}`)
    })
})

router.post('/:id/delete', (req, res) => {
  let id = req.params.id;
  Celebrity.findByIdAndRemove(id)
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch(err => {
      console.log(err)
    })
})

router.get('/new', (req, res) => {
  res.render('celebrities/new')
})

router.post('/new', (req, res) => {
  Celebrity.create(req.body)
    .then(() => {
      res.redirect('/celebrities')
  })
    .catch(err => {
      console.log(err)
      res.redirect('/celebrities/new')
    })
})

router.get('/:id', (req, res) => {
  const {id} = req.params;
  Celebrity.findById(id)
    .then(celebrity => {
      res.render('celebrities/show', celebrity)
    })
    .catch(err => {
      //la importancia del orden de las rutas: si pones primero /:id no jala /new
      console.log(`Error trying to access show.hbs: ${err}`)
    })
})

router.post('/:id', (req, res) => {
  const {id} = req.params;
  Celebrity.findByIdAndUpdate(id, {$set: {...req.body}})
  .then(() => {
    res.redirect('/celebrities')
  })
  .catch(err => {
    console.log(err)
  })
})

module.exports = router;