const express = require('express');
const router = express.Router();
const celebrityModel = require('../model/celebrity');

router.get('/', async (req, res, next) => {
    try {
        const celebrities = await celebrityModel.find();
        return res.render('celebrities/index', { celebrities, title: 'Celebrities' });
    } catch (err) {
        console.error(err);
        next();
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const celebrity = await celebrityModel.findById(req.params.id);
        return res.render('celebrities/show', { celebrity, title: celebrity.name });
    } catch (err) {
        console.error(err);
        next();
    }
});

router.get('/form', async (req, res, next) => {
    return res.render('celebrities/form', { title: 'Create Celebrity' });
});

router.post('/', async (req, res, next) => {
    try {
        const { name, occupation, catchPhrase } = req.body;
        const celebrity = await celebrityModel.create({ name, occupation, catchPhrase });
        celebrity.save();
        return res.redirect('/celebrities');
    } catch (err) {
        return res.redirect('celebrities/form');
    }
});

router.post('/:id/delete', async (req, res, next) => {
    try {
        await celebrityModel.findByIdAndRemove(req.params.id);
        return res.redirect('/celebrities');
    } catch (err) {
        console.error(err);
        next();
    }
});

router.get('/:id/edit', async (req, res, next) => {
    try {
        const celebrity = await celebrityModel.findById(req.params.id);
        return res.render('celebrities/form', { celebrity, title: `Edit: ${celebrity.name}` });
    } catch (err) {
        console.error(err);
        next();
    }
});

router.post('/:id', async (req, res, next) => {
    try {
        const { name, occupation, catchPhrase } = req.body;
        await celebrityModel.findByIdAndUpdate(req.params.id, {
            name,
            occupation,
            catchPhrase
        });
        return res.redirect('/celebrities');
    } catch (err) {
        console.error(err);
        next();
    }
});

module.exports = router;
