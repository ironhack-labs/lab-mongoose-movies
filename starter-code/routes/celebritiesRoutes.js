const express = require('express');
const router = express.Router();
const celebrityModel = require('../model/celebrity');

router.get('/', async (req, res, next) => {
    try {
        const celebrities = await celebrityModel.find();
        res.render('celebrities/index', { celebrities });
    } catch (err) {
        console.error(err);
        next();
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const celebrity = await celebrityModel.findById(req.params.id);
        res.render('celebrities/show', { celebrity });
    } catch (err) {
        console.error(err);
        next();
    }
});

router.get('/form', async (req, res, next) => {
    try {
        res.render('celebrities/form');
    } catch (err) {
        console.error(err);
        next();
    }
});

router.post('/', async (req, res, next) => {
    try {
        const { name, occupation, catchPhrase } = req.body;
        const celebrity = await celebrityModel.create({ name, occupation, catchPhrase });
        celebrity.save();
        res.redirect('/celebrities');
    } catch (err) {
        console.error(err);
        res.redirect('celebrities/form');
        next();
    }
});

router.post('/:id/delete', async (req, res, next) => {
    try {
        const celebrity = await celebrityModel.findByIdAndRemove(req.params.id);
        res.redirect('/celebrities');
    } catch (err) {
        console.error(err);
        next();
    }
});

router.get('/:id/edit', async (req, res, next) => {
    try {
        const celebrity = await celebrityModel.findById(req.params.id);
        res.render('celebrities/form', { celebrity });
    } catch (err) {
        console.error(err);
        next();
    }
});

router.post('/:id', async (req, res, next) => {
    try {
        const { name, occupation, catchPhrase } = req.body;
        const celebrity = await celebrityModel.findByIdAndUpdate(req.params.id, {
            name,
            occupation,
            catchPhrase
        });
        res.redirect('/celebrities');
    } catch (err) {
        console.error(err);
        next();
    }
});

module.exports = router;
