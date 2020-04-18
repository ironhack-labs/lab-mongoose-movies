const express = require('express');
const router = express.Router();
const Celebrity = require("../models/celebrity");

// Read
router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
        .then((dbResponse) => {
            res.render(('celebrities/index.hbs'), {
                celebrities: dbResponse,
                styles: ['gallery.css']
            })
        })
        .catch((dbErr) => {
            next();
            return dbErr;
        })
});

router.get('/celebrities/:id', (req, res, next) => {
    Celebrity.findById(req.params.id)
        .then((dbResponse) => {
            res.render(('celebrities/show.hbs'), {
                celebrity: dbResponse,
                styles: ['view.css']
            })
        })
        .catch((dbErr) => {
            next();
            return dbErr;
        })
})

// Create
router.get('/celebrities/new', (req, res, next) => {
    res.render('celebrities/new.hbs', {
        styles: ['form.css']
    });
})

router.post('/celebrities', (req, res, next) => {
    Celebrity.create(req.body)
        .then((dbResult) => {
            res.redirect('/celebrities')
        })
        .catch((dbErr) => {
            next();
            return dbErr;
        });
});

// Delete
router.post('/celebrities/:id/delete', (req, res, next) => {
    Celebrity.findByIdAndDelete(req.params.id)
        .then((dbResponse) => {
            res.redirect('/celebrities');
        })
        .catch((dbErr) => {
            next();
            return dbErr;
        });
});

// Update
router.get('/celebrities/:id/edit', (req, res, next) => {
    Celebrity.findById(req.params.id)
        .then((dbResponse) => {
            res.render('celebrities/edit.hbs', {
                celebrity: dbResponse,
                styles: ["form.css"]
            });
        })
        .catch((dbErr) => {
            next();
            return dbErr;
        });
});

router.post('/celebrities/:id/edit', (req, res, next) => {
    const updatedCeleb = {
        name: req.body.name,
        occupation: req.body.occupation,
        catchPhrase: req.body.catchPhrase
    };
    Celebrity.findByIdAndUpdate(req.params.id, updatedCeleb, {
            new: true
        })
        .then((dbResponse) => {
            res.redirect('/celebrities');
        })
        .catch((dbErr) => {
            next();
            return dbErr;
        });
});

module.exports = router;