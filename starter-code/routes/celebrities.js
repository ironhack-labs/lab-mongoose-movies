const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

router.get("/", async (req, res, next) => { 
    try {
        const celebrities = await Celebrity.find();
        res.render("celebrities/index", { celebrities });
    } catch (err) {
        next(err);
    }
});

router.get("/:id", async (req, res, next) => { 
    try {
        const celebrity = await Celebrity.findById(req.params.id); 
        res.render("celebrities/show", celebrity);
    } catch (err) {
        next(err);
    }
});

router.get("/new", async (req, res, next) => { 
        res.render("celebrities/new");
});

router.post('/new', async (req, res, next) => { 
    try {
        await Celebrity.create(req.body);
        res.redirect('/celebrities');
    } catch (err) {
        next(err);
    }
});

router.post('/:id/delete', async (req, res, next) => {
    try {
        await Celebrity.findByIdAndRemove(req.params.id);
        res.redirect('/celebrities');
    } catch (err) {
        next(err);
    }
});

router.get('/:id/edit', async (req, res, next) => {
    try {
        const editCelebrity = await Celebrity.findById(req.params.id);
        res.redirect('/celebrities/edit', editCelebrity);
    } catch (err) {
        next(err);
    }
});

router.post('/:id/edit', async (req, res, next) => {
    try {
        await Celebrity.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.redirect('/celebrities');
    } catch (err) {
        next(err);
    }
});

module.exports = router;