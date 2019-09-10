const express = require('express');
const router = express.Router();
const Celebrity = require("../models/celebrity");


router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(data => {
      res.render('celebrities/index.hbs', { data });
    })
    .catch(err => {
      console.log(err);
      next();
    })
});

router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.get('/celebrities/edit/:id', (req, res, next) => { 
  const celebid = req.params.id;
  Celebrity.findById(celebid)
    .then(data => {
      res.render('celebrities/edit', { data });
    })
    .catch(err => {
      console.log(err);
      next();
    })
});

router.post('/celebrities/edit/:id', (req, res, next) => {
  const editid = req.params.id;
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.findByIdAndUpdate(editid, { name, occupation, catchPhrase })
    .then(data => {
    res.redirect('/celebrities');
  })
  .catch(err => {
    console.log(err);
    next();
  })
});


router.post('/celebrities/new', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({ name, occupation, catchPhrase })
    .then(data => {
    res.redirect('/celebrities');
  })
  .catch(err => {
    console.log(err);
    next();
  })
});


router.post('/celebrities/delete/:id', (req, res, next) => {
  const deleteid = req.params.id;
  Celebrity.findByIdAndRemove(deleteid)
    .then(data => { 
      res.redirect('/celebrities');
  })
  .catch(err => {
    console.log(err);
    next();
  })
});


router.get('/celebrities/:id', (req, res, next) => {
  const celebid = req.params.id;
  Celebrity.findById(celebid)
    .then(data => {
      res.render('celebrities/show', { data });
    })
    .catch(err => {
      console.log(err);
      next();
    })
});

module.exports = router;