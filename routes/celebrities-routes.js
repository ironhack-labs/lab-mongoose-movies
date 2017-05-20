const express = require('express');
const Celeb = require('../models/celeb-models.js');
const celebRoutes = express.Router();

celebRoutes.get('/celebrities', (req, res, next) => {
    Celeb.find((err, allCeleb) => {
        if (err) {
            next(err);
            return;
        }
        res.render('celebrities/celebrities-view.ejs', {
            celebrity: allCeleb
        });
    });
});

celebRoutes.get('/celebrities/new', (req, res, next) => {
    res.render('celebrities/celeb-new-view.ejs');
});

celebRoutes.post('/celebrities/new', (req, res, next) => {
    const addCeleb = new Celeb({
        name: req.body.nameValue,
        occupation: req.body.occupationValue,
        catchPhrase: req.body.catchPhraseValue
    });

    addCeleb.save((err) => {
        if (err) {
            console.log(err);
            res.render('celebrities/celeb-new-view.ejs', {
                error: addCeleb.errors
            });
            return;
        }
        res.redirect('/celebrities');
    });


});


celebRoutes.post('/celebrities/:id/delete', (req, res, next) => {
    const celebId = req.params.id;

    Celeb.findByIdAndRemove(celebId, (err, theCeleb) => {
        if (err) {
            next(err);
            return;
        }
        res.redirect('/celebrities');
    });
});

celebRoutes.get('/celebrities/:id/edit', (req, res, next) => {
    const celebId = req.params.id;

    Celeb.findById(celebId, (err, theCeleb) => {
        if (err) {
            next(err);
        }
        res.render('celebrities/celeb-edit-view.ejs', {
            name: theCeleb.name,
            occupation: theCeleb.occupation,
            phrase: theCeleb.catchPhrase,
            id:theCeleb._id
        });
    });

});

celebRoutes.post('/celebrities/:id/edit', (req, res, next) => {
    const celebId = req.params.id;
    const celebChanges = {
        name: req.body.nameValue,
        occupation: req.body.occupationValue,
        catchPhrase: req.body.catchPhraseValue
    };
    Celeb.findByIdAndUpdate(celebId, celebChanges, (err, theCeleb) => {
        if (err) {
          console.log(err);
          next(err);
        }
        res.redirect('/celebrities');
    });
});


celebRoutes.get('/celebrities/:celebId', (req, res, next) => {
    const celebId = req.params.celebId;
    Celeb.findById(celebId, (err, oneCelebrity) => {
        if (err) {
            next(err);
            return;
        }
        if (!oneCelebrity) {
            next(err);
            return;
        }
        console.log(oneCelebrity);
        res.render('celebrities/celeb-detail-view.ejs', {
            celeb: oneCelebrity
        });
    });
});

module.exports = celebRoutes;
