const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity.model');

router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
        .then(celebrities => {
            console.log(celebrities);
            res.render('celebrities/index', { celebrities });
        })
        .catch(error => {
            console.log(`Oh no. An error happened, check this out: ${error}`);
        });
});

////////////////////////////////////
// Create a new celebrity starts //
//////////////////////////////////
router.get('/celebrities/new', (req, res, next) => {
    res.render('celebrities/new');
});

router.post('/celebrities/new', (req, res, next) => {
    Celebrity.create(req.body)
        .then(newCeleb => {
            console.log(`The new celebrity is: ${newCeleb}`);
            res.redirect('/celebrities');
        })
        .catch(error => {
            console.log(`Oh no. An error happened, check this out: ${error}`);
            res.redirect('celebrities/new');
        });
});
//////////////////////////////////
// Create a new celebrity ends //
////////////////////////////////

router.get('/celebrities/:id', (req, res, next) => {
    Celebrity.findById(req.params.id)
        .then(celebrity => {
            console.log(celebrity);
            res.render('celebrities/show', { celebrity });
        })
        .catch(error => {
            console.log(`Oh no. An error happened, check this out: ${error}`);
        });
});

router.post('/celebrities/:id/delete', (req, res, next) =>  {
    Celebrity.findByIdAndRemove(req.params.id)
        .then(() => {
            console.log('Celebrity is deleted');
            res.redirect('/celebrities');
        })
        .catch(error => {
            console.log(`Oh no. An error happened, check this out: ${error}`);
        });
});

router.get('/celebrities/:id/edit', (req, res, next) => {
    Celebrity.findById(req.params.id)
        .then(celebrity => {
            console.log(celebrity);
            res.render('celebrities/edit', celebrity);
        })
        .catch(error => {
            console.log(`Oh no. An error happened, check this out: ${error}`);
        });
});

router.post('/celebrities/:id/edit', (req, res, next) => {
    Celebrity.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(celebDetails => {
            console.log(`Updated: ${celebDetails}`);
            res.redirect('/celebrities');
        })
        .catch(error => {
            console.log(`Oh no. An error happened, check this out: ${error}`);
        });
});



module.exports = router;