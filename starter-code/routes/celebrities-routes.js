const express = require('express');

const Celebrity = require('../models/celebrity-model.js');

const celebrityRoutes = express.Router();

celebrityRoutes.get('/celebrities', (req, res, next) => {

    Celebrity.find((err, celebrityList) => {
        if (err) {
            next(err);
            return;
        }

        res.render('celebrities/index.ejs', {
            celebrities: celebrityList,
        });
    });

});

celebrityRoutes.get('/celebrities/new', (req, res, next) => {
    res.render('celebrities/new-view.ejs');
});

celebrityRoutes.post('/celebrities/new', (req, res, next) => {
    const theCelebrity = new Celebrity({
        name: req.body.celebName,
        occupation: req.body.celebOccupation,
        catchPhrase: req.body.celebCatchPhrase
    });

    theCelebrity.save((err) => {
        if (err) {
            res.render('celebrities/new-view.ejs');
            return;
        }
        res.redirect('/celebrities');
    });
});

celebrityRoutes.get('/celebrities/:id', (req, res, next) => {
    const celebrityId = req.params.id;

    Celebrity.findById( celebrityId, (err, theCelebrity) => {
        if (err) {
            next(err);
            return;
        }

        res.render('celebrities/show-view.ejs', {
            celebrity: theCelebrity,
        });

    });
});

celebrityRoutes.get('/celebrities/:id/edit', (req, res, next) => {
    const celebrityId = req.params.id;

    Celebrity.findById( celebrityId, (err, theCelebrity) => {
            if(err) {
                next(err);
                return;
            }

            res.render('celebrities/edit-view.ejs', {
                celebrity: theCelebrity,
            });
    });
});


celebrityRoutes.post('/celebrities/:id', (req, res, next) => {
    const celebrityId = req.params.id;

    const celebrityChanges = {
        name: req.body.celebName,
        occupation: req.body.celebOccupation,
        catchPhrase: req.body.celebCatchPhrase
    };

    Celebrity.findByIdAndUpdate( celebrityId, celebrityChanges, (err, theCelebrity) => {
        if (err) {
            next(err);
            return;
        }

         res.redirect('/celebrities');
    });
});

celebrityRoutes.post('/celebrities/:id/delete', (req, res, next) => {
    const celebrityId = req.params.id;

    Celebrity.findByIdAndRemove( celebrityId, (err, theCelebrity) => {
        if (err) {
            next(err);
            return;
        }
        res.redirect('/celebrities');
    });
});






module.exports = celebrityRoutes;
