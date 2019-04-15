const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity');

/* GET home page */
router.get('/', (req, res, next) => {
    Celebrity.find()
        .then(celebrities => {
            // console.log('Retrievied celebrities from DB: ', celebrities);
            res.render('celebrities/index', { celebrities });
        })
        .catch(err => console.error(err));
});

router.get('/new', (req, res, next) => {
    res.render('celebrities/new');
});

router.get('/:celebrityId', (req, res, next) => {
    const { celebrityId } = req.params;
    Celebrity.findById({ _id: celebrityId })
        .then(celebrity => {
            console.log('Retrieved celebrity from DB: ', celebrity);
            res.render('celebrities/show', celebrity);
        })
        .catch(err => console.error('Impossible to retrieve celebrity info', err));
});

router.post('/', (req, res, next) => {
    const { name, occupation, catchPhrase } = req.body;
    const newCelebrity = new Celebrity({ name, occupation, catchPhrase });
    newCelebrity
        .save()
        .then(celebrity => {
            console.log('Created a new Celebrity in DB', celebrity);
            res.redirect('/celebrities');
        })
        .catch(err => console.error('Impossible to create new Celebrity', err));
});

router.post('/:celebrityId/delete', (req, res, next) => {
    const celebrityId = req.params.celebrityId;
    Celebrity.findByIdAndDelete(celebrityId)
        .then(celebrity => {
            console.log('Succesfully deleted: ', celebrity);
            res.redirect('/celebrities');
        })
        .catch(err => console.error('Impossible to delete celebrity', err));
});

module.exports = router;
