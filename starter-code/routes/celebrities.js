const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity');


router.get('/', (req, res, next) => {
  console.log('entra aqui')
  Celebrity.find().exec((err, celebrity) => {
    res.render('celebrities/index', {
      celebrity: celebrity
    });
  });
});

/* CRUD -> READ ALL */
router.get('/', (req, res, next) => {
  Celebrity.find().exec((err, celebrity) => {
    res.render('celebrities/index', {
      celebrity: celebrity
    });
  });
});

/* CRUD -> READ DETAIL */
router.get('/show/:id', (req,res) => {
  const celebrityId = req.params.id;

  Celebrity.findById(celebrityId, (err, celebrity) => {
    if (err) { return next(err); }
      res.render('celebrities/show', { celebrity: celebrity});
  });
})

module.exports = router;