const express = require("express");
const router = new express.Router();
const Celebrity = require("../models/celebrity");

router.get('/celebrities', (req, res, next) => {
    Celebrity.find({})
        .then((dbResult) => {
            res.render('celebrities/index.hbs', {
                myCelebrities: dbResult
            });
        })
        .catch((err) => {
            next();
            return err;
        });
});

// show hbs

router.get('/celebrities/:id', (req, res, next) => {
    Celebrity.findById(req.params.id)
        .then((dbResult) => {
            res.render('celebrities/show.hbs', {
                oneCelebrity: dbResult,
            });
        })
        .catch((dbErr) => {
            next();
            return dbErr;
        });
});


// Adding new celebrities

router.get('/celebrities/new', (req, res) => {
    res.render('celebrities/new.hbs')
});


router.post('/celebrities', (req, res) => {
    Celebrity.create(req.body)
        .then((dbResult) => {
            res.redirect('/celebrities')
        })
        .catch((dbErr) => {
            console.log(dbErr);
            res.render('celebrities/new.hbs', {
                error: "you must fill in all the fields..." // If fails: reloads the page + displays an error message
            });
        });
});



// Deleting celebrities

router.post('/celebrities/:id/delete', (req, res, next) => {
    Celebrity.findByIdAndDelete(req.params.id)
        .then((dbResult) => {
            res.redirect('/celebrities')
        })
        .catch((dbErr) => {
            next();
            return dbErr;
        })
})


// Updating Celebrities


router.get('/celebrities/:id/edit', (req, res, next) => {
    Celebrity.findById(req.params.id)
        .then((dbResult) => {
            res.render('celebrities/edit.hbs', {
                celebrityToBeEdited: dbResult
            });
        })
        .catch((dbErr) => {
            next();
            return dbErr;
        });
});

router.post('/celebrities/:id', (req, res, next) => {
    Celebrity.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        .then((dbResult) => {
            res.redirect('/celebrities')
        })
        .catch((dbErr) => {
            next();
            return dbErr;
        });
});


module.exports = router;