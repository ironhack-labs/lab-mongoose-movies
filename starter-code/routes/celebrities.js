const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity');



router.get('/', async(req, res, next) => {
    try {
        const celebrities = await Celebrity.find();
        res.render('celebrities/index', { celebrities });
    } catch (error) {
        console.log(error);
        next();
    }
});

router.get('/new', (req, res, next) => {
    res.render('celebrities/new');
});

router.post('/', (req, res, next) => {
    const newCelebrity = new Celebrity(req.body);
    console.log(newCelebrity)
    newCelebrity.save()
        .then(() => {
            console.log(`Celebrity ${newCelebrity} created`);
            res.redirect('/celebrities');
        })
        .catch((error) => {
            res.render('celebrities/new');
            console.log(error);
        });
});

router.get('/:id', async(req, res) => {
    console.log(`entrou nessa rota`)
    const { id } = req.params;
    try {
        const celebrity = await Celebrity.findById(id);
        res.render('celebrities/show', celebrity);
    } catch (error) {
        console.log(error)
    }
})

router.post('/:id/delete', async(req, res, next) => {
    const { id } = req.params;
    try {
        await Celebrity.findByIdAndRemove(id);
        console.log('Delete with success.');
        res.redirect('/celebrities');
    } catch (error) {
        console.log(error);
    }
})

router.get(`/:id/edit`, async(req, res, next) => {
    const { id } = req.params;
    try {
        const celebrity = await Celebrity.findById(id);
        res.render('celebrities/edit', celebrity);
    } catch (error) {
        console.log(error);
    }
})

router.post('/:id', async(req, res, next) => {
    const { id } = req.params;
    const celebrity = req.body;
    try {
        await Celebrity.findByIdAndUpdate(id, celebrity);
        res.redirect('/celebrities');
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;