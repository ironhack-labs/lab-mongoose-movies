const express = require('express');
const router = express.Router();

const Celebrities = require('../models/celebrity');

router.get('/', (req, res, next) => {
    Celebrities.find({}, (err, celebrity) => {
        if (err) {
            next(err);
        } else {
            res.render('celebrities/index', {
                celebrity
            });
        }
    });
});

router.get('/new', (req, res, next) => {
    res.render('celebrities/new');
});

router.get('/:id', (req, res, next) => {
    let celebId = req.params.id;
    Celebrities.findById(celebId, (err, celebrity) => {
        if (err) {
            next(err);
        } else {
            res.render('celebrities/show', {
                celebrity
            });
        }
    });
});

router.post('/', (req, res, next) => {
    const celebInfo = {
        name: req.body.name,
        occupation: req.body.occupation,
        catchPhrase: req.body.catchPhrase
    };

    const newCeleb = new Celebrities(celebInfo);

    newCeleb.save((err) => {
        if (err) {
            return next(err)
        } else {
            res.redirect('/celebrities')
        }
    });
});

router.post('/:id/delete', (req, res, next) => {
    const celebId = req.params.id;

    Celebrities.findByIdAndRemove(celebId, (err, celebrity) => {
        if (err) {
            return next(err)
        } else {
            res.redirect('/celebrities');
        }
    })
});

router.get('/:id/edit', (req, res, next) => {
    let celebId = req.params.id;
    Celebrities.findById(celebId, (err, celebrity) => {
        if (err) {
            next(err);
        } else {
            res.render('celebrities/edit', {
                celebrity
            });
        }
    });
});

router.post('/:id', (req, res, next) => {
    const celebId = req.params.id;

    const celebInfo = {
        name: req.body.name,
        occupation: req.body.occupation,
        catchPhrase: req.body.catchPhrase
    };

    Celebrities.findByIdAndUpdate(celebId,celebInfo, (err) => {
        if (err) {
            return next(err)
        } else {
            res.redirect(`/celebrities/${celebId}`);
        }
    })
});

module.exports = router;