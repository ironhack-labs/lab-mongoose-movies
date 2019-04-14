const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity');

router.get("/celebrities", (req, res, next) => {
  Celebrity.find({})
  .then((celebrities) => {
    res.render('celebrities/index', {celebrities});
  })
  .catch(() => {
    next();
  })
});

router.get("/celebrities/:id", (req, res, next) => {
  let celebrityId = req.params.id;
  Celebrity.findById(celebrityId)
  .then((celebrity) => {
    res.render('celebrities/show', celebrity);
  })
  .catch(() => {
    next();
  })
});

router.get("/celebrities/new", (req, res, next) => {
    res.render('celebrities/new');
});

router.post('/celebrities/new', (req, res, next) => {

  const {name, occupation, catchPhrase} = req.body;

  const newCelebrity = new Celebrity({name, occupation, catchPhrase});
  newCelebrity.save()
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch(() => {
      res.render('celebrities/new');
    })
});

router.post('/celebrities/:id/delete', (req, res, next) => {
  let celebrityId = req.params.id;
  Celebrity.findByIdAndRemove(celebrityId)
  .then(() => {
    res.redirect('/celebrities');
  })
  .catch(() => {
    next();
  })
});

router.get("/celebrities/:id/edit", (req, res, next) => {
  let celebrityId = req.params.id;
  Celebrity.findById(celebrityId)
  .then((celebrity) => {
    res.render('celebrities/edit', celebrity);
  })
  .catch(() => {
    next();
  })
});

router.post('/celebrities/:id', (req, res, next) => {
  let celebrityId = req.params.id;
  console.log(req.body)
  Celebrity.findByIdAndUpdate(celebrityId, req.body)
  .then(() => {
    res.redirect('/celebrities');
  })
  .catch((err) => {
    console.log(err)
    next();
  })
});


module.exports = router;