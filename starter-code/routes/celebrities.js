const express = require('express');
const router  = new express.Router();
const Celebrity = require("../models/Celebrity");

router.get('/index', (req,res) => {
    Celebrity
    .find()
    .then(celebrities => {
        res.render('celebrities/index', {
            celebrities
        });
    })
    .catch(dbErr => console.log(dbErr));
});

router.get('/new', (req, res) => {
    res.render('celebrities/new');
})

router.post('/new', (req,res) => {
    const {name, occupation, catchPhrase} = req.body;
    Celebrity.create({
        name,
        occupation,
        catchPhrase
    })
    .then(dbRes => res.redirect('/celebrities/index'))
    .catch(dbErr => {
        res.send('An Error Occurred, Try Again')
        res.render('celebrities/new')
        console.log(dbErr);

    });
});

router.get('/:id/edit', (req, res) => {
    Celebrity
    .findById(req.params.id)
    .then(dbRes => {
        res.render('celebrities/edit', { celebrity: dbRes });
    })
    .catch(dbErr => {
        next;
        return dbErr;
    });
})

router.post('/:id/edit', (req,res) => {
    const { name, occupation, catchPhrase } = req.body;
    Celebrity.findByIdAndUpdate(req.params.id, {
        name,
        occupation,
        catchPhrase
    })
    .then(dbRes => {
        res.redirect('/celebrities/index')
    })
    .catch(dbErr => {
        next;
        return dbErr;
    })
})

router.post('/:id/delete', (req, res, next) => {
    Celebrity
    .findByIdAndRemove(req.params.id)
    .then(dbRes => {
        res.redirect('/celebrities/index')
    })
    .catch(dbErr => {
        next;
        console.log(dbErr);
        return dbErr;
    })
})

router.get('/:id', (req, res, next) => {
    Celebrity
    .findById(req.params.id)
    .then(celebrity => {
        res.render('celebrities/show', {
            celebrity
        });
    })
    .catch(dbErr => {
        next;
        console.log(dbErr);
        return dbErr;
    });

});


module.exports = router;
