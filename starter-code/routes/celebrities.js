const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity');

router.get('/', (req, res, next) => {
    Celebrity.find().exec((err, celebrities, next) => {

        if (err) { return next(err) }

        res.render('celebrities/index', {
            celebrities: celebrities
        });
    });
});

router.get('/show/:id', (req, res) => {
    const celeId = req.params.id;

    Celebrity.findById(celeId, (err, cele) => {
        if (err) { return next(err); }
        res.render('celebrities/show', { celebrities: cele });

    });
})

router.get('/show/:id/update', (req, res) => {
    const celeId = req.params.id;
    Celebrity.findById(celeId, (err, cele) => {
        if (err) { return next(err); }
        res.render('celebrities/update', { celebrities: cele });
    });
})

router.post('/show/:id/update', (req, res) => {
    const celeId = req.params.id;
    const { name, occupation, catchPhrase } = req.body;
    const updates = { name, occupation, catchPhrase };

    Celebrity.findByIdAndUpdate(celeId, updates, (err, cele) => {
        if (err) { return next(err); }
        return res.redirect('/');
    });
})

router.get('/new', (req, res) => {
    res.render('celebrities/new');
})

/* CRUD -> CREATE DATABASE */
router.post('/new', (req, res) => {
    const {name, occupation, catchPhrase} = req.body;
    const celebrity = new celebrities({name, occupation, catchPhrase});
    celebrity.save( err => {
      if (err) { return next(err) }
      res.redirect('/');
    })
  });

module.exports = router;