const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebmodel')

//read
router.get('/', function(req, res, next) {
  Celebrity.find()
  .then(celebrity => {
    res.render('celebrities', {celebrity});
  })
  .catch(error => {
    next(error);
  })
});

//create
router.get('/create', (req, res, next) => {
  res.render('crud/create')
})

router.post('/', (req, res, next) => {
  const celeb = req.body;
  Celebrity.create(celeb)
  .then(() => {
    res.redirect('/celebs');
  })
  .catch(error => {
    next(error);
  })
})

//update
router.get('/:id/edit', (req,res, next) => {
  const id = req.params.id;
  Celebrity.findById(id)
  .then(celebrity => {
    res.render('crud/edit', {celebrity});
  })
  .catch(error => {
    next(error);
  })
});

//delete
router.post('/:id/delete', (req, res, next) => {
  const id = req.params.id;
  Celebrity.findByIdAndDelete(id)
  .then(result => {
    res.redirect('/celebs');
  })
  .catch(error => {
    next(error);
  })
})

router.post('/:id', (req, res, next) => {
  const id = req.params.id;
  const update = req.body;
  Celebrity.findByIdAndUpdate(id, update)
  .then(() => {
    res.redirect(`/celebs/${id}`);
  })
  .catch(error => {
    next(error);
  })
})

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  Celebrity.findById(id)
  .then(celebrity => {
    res.render('celebrity', {celebrity})
  })
  .catch(error => {
    next(error);
  })
});

module.exports = router;
