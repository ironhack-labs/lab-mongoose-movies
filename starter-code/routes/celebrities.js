const express = require('express');
const router = express.Router();

const Celebrity = require('../models/celebrity.js');

/* GET celebrities page */
router.get('/', (req, res, next) => {
    Celebrity.find()
        .then(allCelebrities => {
            res.render('celebrities/index', {
                celebrities: allCelebrities
            });
        }).catch(error => {
            next(error);
        });
});

/*POST celebrity*/
router.post('/', (req, res, next) => {
    const {
        name,
        occupation,
        catchPhrase
    } = req.body;
    const newCelebrity = new Celebrity({
        name,
        occupation,
        catchPhrase
    });
    newCelebrity.save()
        .then((celebrity) => {
            res.redirect('/celebrities');
        })
        .catch((error) => {
            res.redirect('/new');
        });
});

/*GET celebrities add details page*/
router.get('/new', (req, res, next) => {
    res.render('celebrities/new');
});

/*POST delete celebrity*/
router.post('/:id/delete', (req, res, next) => {
    Celebrity.findByIdAndRemove(req.params.id)
        .then((celebrity) => {
            res.redirect('/celebrities');
        })
        .catch((error) => {
            next(error);
        });
});

/*GET celebrities details page*/
router.get('/:id', (req, res, next) => {
    Celebrity.findById(req.params.id)
        .then(theCelebrity => {
            res.render('celebrities/show', {
                theCelebrity
            });
        }).catch(error => {
            next(error);
        });
});





module.exports = router;