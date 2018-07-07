const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity');

router.get('/', (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      res.render('celebrities/index', {celebrities});
    })
    .catch(err => {
      next();
      throw err;
    });
});

router.post('/', (req,res) => {
  Celebrity.create(req.body)
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch(err => {
      console.log(err);
      res.render('celebrities/new', {err});
    });
});

router.get('/:id', (req, res, next) => {
  let celebId = req.params.id;
  Celebrity.findById(celebId)
    .then(celeb => {
      res.render('celebrities/show', {celeb});
    })
    .catch(err => {
      next();
      throw err;
    });
});

router.post('/:id', (req, res, next) => {
  var send = req.body;
  Celebrity.findByIdAndUpdate(req.params.id, send)
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch(err => {
      next();
      throw err;
    });
});

router.get('/edit/:id3', (req, res, next) => {
  let celebId = req.params.id3;
  Celebrity.findById(celebId)
    .then(celeb => {
      res.render('celebrities/edit', {celeb});
    })
    .catch(err => {
      next();
      throw err;
    });
});

router.post('/delete/:id2', (req, res, next) => {
  let celebId = req.params.id2;
  Celebrity.findByIdAndRemove(celebId)
    .then(()=>{
      res.redirect('/celebrities');
    })
    .catch(err => {
      next();
      throw err;
    });
});

router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
});

module.exports = router;
