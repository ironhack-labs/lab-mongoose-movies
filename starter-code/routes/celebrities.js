const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrities');

/* CRUD -> READ ALL */
router.get('/', (req, res, next) => {
    Celebrity.find().exec((err, celebrities) => {
        res.render('celebrities', {
            celebrities: celebrities
        });
    });
});

/* CRUD -> READ DETAIL */
router.get('/detail/:id', (req, res) => {
    const celebId = req.params.id;
    Celebrity.findById(celebId, (err, celebrity) => {
        if (err) {
            return next(err);
        }
        res.render('detail', {
            celebrity: celebrity
        });
    });
})

/* CRUD -> CREATE FORM */
router.get('/new', (req, res) => {
    res.render('new');
});

/* CRUD -> CREATE DATABASE */
router.post('/new', (req, res) => {
    const {
        name,
        occupation,
        catchPhrase
    } = req.body;
    const newCeleb = new Celebrity({
        name,
        occupation,
        catchPhrase
    });
    newCeleb.save(err => {
        if (err) {
            return next(err)
        }
        res.redirect('/celebrities');
    })
});

/* CRUD -> DELETE PRODUCT FROM DATABASE */

router.get('/detail/delete/:id', (req, res) => {
    const id = req.params.id;

    Celebrity.findByIdAndRemove(id, (err, product) => {
        if (err) {
            return next(err);
        }
        return res.redirect('/celebrities');
    });
});


/* CRUD -> UPDATE FORM */
router.get('/detail/:id/edit', (req, res) => {
    const celebId = req.params.id;
    Celebrity.findById(celebId, (err, celebrity) => {
        if (err) {
            return next(err);
        }
        res.render('edit', {
            celebrity: celebrity
        });
    });
})


/* CRUD -> UPDATE DATABASE */
router.post('/detail/:id/', (req, res) => {
    const celebId = req.params.id;
    const {name,occupation,catchPhrase} = req.body;
    const updates = {name,occupation,catchPhrase};

    Celebrity.findByIdAndUpdate(celebId, updates, (err, product) => {
        if (err) {
            return next(err);
        }
        return res.redirect(`/celebrities/detail/${celebId}`);
    });
})




module.exports = router;