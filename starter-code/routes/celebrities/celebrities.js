//What we require?
const express = require('express');
const router = express.Router();

/////////////////////////////////////////////////////////////////////////////////
//Require model
const Celebrity = require("../../models/celebrity")

/////////////////////////////////////////////////////////////////////////////////

// GET home page /celebrities
router.get('/', async (req, res, next) => {
    try {
        const celebrities = await Celebrity.find(); //save in const the model
        res.render('celebrities/index', {
            celebrities
        }); //('view route', {object DB})
    } catch (error) {
        next(error);
    }

});

// GET new /celebrities
router.get('/new', async (req, res, next) => {
    try {
        res.render('celebrities/new');
    } catch (error) {
        next(error);
    }

});

// POST new /celebrities (form)
router.post('/new', async (req, res, next) => {
    try {
        //console.log(req.body);
        const {
            name,
            occupation,
            catchPhrase
        } = req.body;
        await new Celebrity({
            name,
            occupation,
            catchPhrase
        }).save(); //save the new object created to DB
        res.redirect('/celebrities');
    } catch {
        res.render('celebrities/new');
    }

});

// GET :id /celebrities (details)
router.get('/:_id', async (req, res, next) => {
    try {
        const celebrity = await Celebrity.findOne(req.params);
        res.render('celebrities/show', celebrity);
    } catch (error) {
        next(error);
    }
});

// POST delete /celebrities
router.post('/:_id/delete', async (req, res, next) => {
    try {
        const id = req.params;
        console.log(id);
        await Celebrity.findOneAndDelete(id);
        res.redirect('/celebrities');
    } catch (error) {
        next(error);
    }
});

// GET edit /celebrities (details)
router.get('/:_id/edit', async (req, res, next) => {
    try {
        const celebrity = await Celebrity.findOne(req.params);
        res.render('celebrities/edit', celebrity);
    } catch (error) {
        next(error);
    }
});

// POST edit /celebrities (form)
router.post('/:_id/edit', async (req, res, next) => {
    try {
        console.log(req.body);
        const {
            id,
            name,
            occupation,
            catchPhrase
        } = req.body;
        console.log(id);
        await Celebrity.update({
            _id: id //condición para encontrarlo
        }, {
            $set: { //se entregan los nuevos valores
                name,
                occupation,
                catchPhrase
            }
        });
        res.redirect('/celebrities');
    } catch (error) {
        console.log(error);
    }

});

module.exports = router;