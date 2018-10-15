const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const celebritySchema = require('../models/Celebrity');
const Celebrity = mongoose.model('Celebrity', celebritySchema);

/* GET celebrities page. */
router.get('/', function(req, res, next) {

  Celebrity.find()
  .then(result => {
    res.render('celebrities/index', { result });
  })
  .catch(err => {
    console.error('Se ha producido un error', err);
  });

});

router.get('/new', (req, res, next) => {
    res.render('celebrities/new');
  });

router.post('/new', (req, res, next) => {
  const celebrity = req.body;

  Celebrity.save(celebrity)
  .then(() => {
    console.log('Se han guardado los datos correctamente!')
    res.redirect('/celebrities');
  })
  .catch((error) => {
    console.error('Se ha producido un error', error);
    res.render('/celebrities/new');
  });
  res.send('hola!')
});

router.get('/:id', function(req, res, next) {
  const id = req.params.id;

  Celebrity.findById(id)
  .then(result => {
    res.render('celebrities/show', { result });
  })
  .catch(err => {
    console.error('Se ha producido un error', err);
  });

});

module.exports = router;