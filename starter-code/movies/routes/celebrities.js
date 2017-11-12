const express = require('express');
const Celebrity = require('../models/celebrity');
const router  = express.Router();

router.get('/', (req ,res, next) => {
  Celebrity.find({}, (err, celebrities) =>{
    return  err ? next(err) : res.render('celebrities/index', { celebrities: celebrities });
  })
});

router.get('/new', (req ,res, next) => {
  res.render('celebrities/new', {
    celebrity: new Celebrity()
  });
});

router.post('/', (req, res, next) => {
  let celebrityData = {
    name: req.body.name,
    ocupation: req.body.ocupation,
    catchPhrase: req.body.catchPhrase

  };

  const celebrity = new Celebrity(celebrityData);

  celebrity.save((err) => {
    if (err) {
      return res.render('celebrities/form', {
        celebrity: celebrity,
        err: err
      })
    }
    return res.redirect('/celebrities');
  });
});

router.get('/:id', (req ,res, next) => {
  let id = req.params.id;
  Celebrity.findById(id, (err, celebrity) =>{
    return  err ? next(err) : res.render('celebrities/show', { celebrity: celebrity });
  })
});

router.get('/:id', (req ,res, next) => {
  let id = req.params.id;
  Celebrity.findById(id, (err, celebrity) =>{
    return  err ? next(err) : res.render('celebrities/show', { celebrity: celebrity });
  })
});

router.get('/:id/edit', (req, res, next) => {
  let id = req.params.id

  Celebrity.findById(id, (err, celebrity) => {
    res.render('celebrities/form', {
      celebrity: celebrity
    })
  })
});

router.post('/:id', (req, res, next) => {
  let id = req.params.id

  const updates = {
    name: req.body.name,
    ocupation: req.body.ocupation,
    catchPhrase: req.body.catchPhrase
  };

  Celebrity.findByIdAndUpdate(id, updates, (err, celebrity) => {
    return  err ? next(err) : res.redirect(`/celebrities/${celebrity_id}`);
  });
});

router.post('/:id/delete', (req, res, next) => {
  let id = req.params.id
  Celebrity.findByIdAndRemove(id, (err, celebrity) => {
    return  err ? next(err) : res.redirect('/celebrities');
  });
});

module.exports = router;
