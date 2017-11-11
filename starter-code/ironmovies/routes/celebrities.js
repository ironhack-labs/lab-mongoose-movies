const express = require('express');
const Celebrity= require('../models/Celebrity');

const router  = express.Router();

router.get('/', (req, res, next) => {
  Celebrity.find({}, (err, result) => {
    if (err) { return next(err) }
    console.log(result)
    res.render('celebrities/index', {

      celebrities: result
    });
  });
});

router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.get('/:id', (req, res, next) => {
  let id = req.params.id
  Celebrity.findById(id, (err, details) => {
    console.log(details)
    res.render('celebrities/show', {

      celebrities: details

    })
  })
});

router.post('/', (req, res, next) => {
  const celebrityCreated = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase,
  };

  // Create a new Product with the params
  const celebrity = new Celebrity(celebrityCreated);

  celebrity.save((err) => {
    if (err) {
      return res.render('celebrities/new', {
        celebrity: celebrity
      })
    }

    return res.redirect('/celebrities');
  });
});

router.post('/:id/delete', (req, res, next) => {
  let id = req.params.id

Celebrity.findByIdAndRemove(id, (err, celebrity) => {
    if (err){ return next(err); }

    return res.redirect('/celebrities');
  });
});






module.exports = router;
