const express = require('express');
const router = express.Router();
const Celebrity = require("../../models/celebrity")

/* GET home page */
router.get('/', async(req, res, next) => {
    try {
        const celebrities = await Celebrity.find();
        res.render('celebrities/index', { celebrities });
    } catch (error) {
        next(error);
    }

});

router.get('/new', async(req, res, next) => {
    try {
        console.log("hola");
        res.render('celebrities/new');
    } catch (error) {
        next(error);
    }

});

router.post('/new', async(req, res, next) => {
    try {
        console.log(req.body);
        const { name, occupation, catchPhrase } = req.body;
        await new Celebrity({
            name,
            occupation,
            catchPhrase
        }).save();
        res.redirect('/celebrities')
    } catch {
        res.render('celebrities/new')
    }

});

router.get('/:_id', async(req, res, next) => {
    try {
        const celebrity = await Celebrity.findOne(req.params);
        res.render('celebrities/show', celebrity);
    } catch (error) {
        next(error);
    }
});
router.post('/:_id/delete', async(req, res, next) => {
    try {
        const id = req.params;
        console.log(id);
        await Celebrity.findOneAndDelete(id);
        res.redirect('/celebrities');
    } catch (error) {
        next(error);
    }
});

router.get('/:_id/edit', async(req, res, next) => {
    try {
        const celebrity = await Celebrity.findOne(req.params);
        res.render('celebrities/edit', celebrity);
    } catch (error) {
        next(error);
    }
});
router.post('/:_id/edit', async(req, res, next) => {
    try {
        console.log(req.body);
        const { id, name, occupation, catchPhrase } = req.body;
        console.log(id);
        await Celebrity.update({ _id: id }, {
            $set: {
                name,
                occupation,
                catchPhrase
            }
        });
        res.redirect('/celebrities')
    } catch (error) {
        console.log(error);
    }

});

module.exports = router;