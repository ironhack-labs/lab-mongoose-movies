const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity');

/* CRUD -> READ ALL */
router.get('/', (req, res, next) => {
    Celebrity.find().exec((err, celebrity) => {
        res.render('celebrity/index', {
            celebrity: celebrity
        });
    });
});

/* CRUD -> CREATE FORM */
router.get('/new', (req, res) => {
    res.render('celebrity/new')
});

/* CRUD -> CREATE DATABASE */
router.post('/new', (req, res) => {
    const { name, occupation, catchPhrase } = req.body;
    const celeb = new Celebrity({ name, occupation, catchPhrase });
    celeb.save(err => {
        if (err) { return next(err) }
        res.redirect('/celebrity');
    })
});




/* CRUD -> READ DETAIL */
router.get('/:id', (req, res) => {
    const celebId = req.params.id;
    Celebrity.findById(celebId, (err, celebrity) => {
        res.render('celebrity/views', { celebrity });
    });
})

/* CRUD -> DELETE PRODUCT FROM DATABASE */
router.get('/:id/delete', (req, res) => {
    const id = req.params.id;
    Celebrity.findByIdAndRemove(id, (err, celebrity) => {
      if (err){ return next(err); }
      return res.redirect('/celebrity');
    });
  });





module.exports = router;
