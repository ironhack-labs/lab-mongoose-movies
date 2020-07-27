const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity');

router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
        .then(allCelebritiesFromDB => {
            console.log('From DB:', allCelebritiesFromDB);
            res.render('celebrities/index', { allCelebritiesFromDB });
        })
        .catch(error => {
            console.log('Error looking for celebrities:', error);
        });
});

router.get('/celebrities/new', (req, res, next) => {
    res.render('celebrities/new');
});

router.post('/celebrities/new', (req, res, next) => {
    const { name, occupation, catchPhrase } = req.body;
    const newCelebrity = new Celebrity({ name, occupation, catchPhrase });
    newCelebrity.save()
        .then((celebrity) => {
            res.redirect('/celebrities');
        })
        .catch(error => {
            console.log('Error:', error);
        });
});
/**************editar una celebrity */
router.get('/celebrities/:id/edit', (req, res, next) => {
    Celebrity.findById(req.params.id)
        .then(editCelebrity => {
            res.render('celebrities/edit', { editCelebrity });
        })
        .catch(error => {
            console.log('Error retrieving id:', error);
        });
});
router.post('/celebrities/:id', (req, res, next) => {
    const { name, occupation, catchPhrase } = req.body;
    //const newCelebrity = new Celebrity({ name, occupation, catchPhrase });
    Celebrity.update(
        { _id: req.params.id }, { $set: { name, occupation, catchPhrase } }, { new: true }
    )
        .then(() => {
            res.redirect('/celebrities');
        })
        .catch(error => {
            console.log('Error:', error);
        });
});
/*********************************************** */
router.get('/detail/:id', (req, res, next) => {
    Celebrity.findById(req.params.id)
        .then(theCelebrity => {
            console.log(theCelebrity);
            res.render('celebrities/show', { theCelebrity });
        })
        .catch(error => {
            console.log('Error retrieving id:', error);
        });
});

router.post('/celebrities/:id/delete', (req, res, next) => {
    Celebrity.findByIdAndRemove(req.params.id)
        .then(() => {
            res.redirect('/celebrities');
        })
        .catch(error => {
            console.log('Error:', error);
        });
});


module.exports = router;