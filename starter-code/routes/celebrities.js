const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity');


// Programando aqui, arrumar depois
router.get('/', (req, res, next) => {
  Celebrity.find()
    .then(data => {
      // res.send(data);
      res.render('celebrities/index', { data });
    })
    .catch(err => {
      next();
      throw new Error(err);
    });
});

router.post('/', (req, res, next) => {
  const {name, occupation, catchPhrase} = req.body;

  Celebrity.create({name, occupation, catchPhrase})
    .then(data => {
      console.log(`Added to the database: ${data}`);
      res.redirect('celebrities');
    })
    .catch(err => { throw new Error(err) });
});

router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.get('/:celebrityId', (req, res, next) => {
  const { celebrityId } = req.params;

  Celebrity.findById(celebrityId)
    .then(celebrity => {
      res.render('celebrities/show', celebrity);
    })
    .catch(err => { 
      next();
      throw new Error(err);
    });
});


module.exports = router;