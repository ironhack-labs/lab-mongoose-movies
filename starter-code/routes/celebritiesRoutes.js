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

router.get('/new', async (req, res, next) => {
    try {
        res.render('celebrities/new');
    } catch (err) {
        console.error(err);
        next();
    }
});

router.post('/', async (req, res, next) => {
    try {
        const { name, ocuppation, catchPhrase } = req.body;
        const celebrity = await celebrityModel.create({ name, ocuppation, catchPhrase });
        celebrity.save();
        res.redirect('/celebrities');
    } catch (err) {
        console.error(err);
        res.redirect('celebrities/new');
        next();
    }
});

module.exports = router;
