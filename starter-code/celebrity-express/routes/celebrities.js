var express = require('express');
var router = express.Router();
const Celebrity = require('../models/Celebrity')

/* GET users listing. */
router.get('/', function(req, res, next) {
  Celebrity.find()
  .then(celebrities => {
    res.render('celebrities/index', {celebrities})
  })
  .catch(error => {
    next(error)
  })
});


router.get('/add', (req, res, next) => {
  res.render('celebrities/add')
})

router.post('/', (req, res, next) => {
  const data = req.body
  Celebrity.create(data)
  .then(result => {
    res.redirect('/celebrities')
  })
  .catch(error => {
    next(error)
  })
})

router.get('/:id/edit', (req, res, next) => {
  const id = req.params.id;
  Celebrity.findById(id)
  .then(celebrity => {
    res.render('celebrities/edit', {celebrity})
  })
  .catch(error => {
    next(error)
  })
})

router.post('/:id', (req, res, next) => {
  const data = req.body
  const id = req.params.id;
  Celebrity.findByIdAndUpdate(id, data)
  .then(result => {
    res.redirect(`/celebrities/${id}`)
  })
  .catch(error => {
    next(error)
  })
})

router.post('/:id/delete', (req, res, next) => {
  const id = req.params.id;
  Celebrity.findByIdAndDelete(id)
  .then(result => {
    res.redirect('/celebrities')
  })
  .catch(error => {
    next(error)
  })
})

router.get('/:id', function(req, res, next) {
  const id = req.params.id
  Celebrity.findById(id)
  .then(celebrity => {
    res.render('celebrities/show', {celebrity})
  })
  .catch(error => {
    next(error)
  })
});

module.exports = router;
