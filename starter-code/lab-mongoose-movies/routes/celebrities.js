const express = require('express');
const router  = express.Router();

const Celebrity = require("../models/celebrity-model");

// GET celebrities index page //
router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
    .then( (celebrities) => {
      res.locals.celebrities = celebrities;
        // res.send(req.);
      res.render('celebrities/index');
    })
    .catch( (err) => {
        next(err);
    });
});

// ADD Step #1 //
router.get('/celebrities/new', (req, res, next) => {
    res.render('celebrities/new');
});

// ADD step #2 //
router.post('/celebrities', (req, res, next) => {
    const { name, occupation, catchPhrase } = req.body;

    Celebrity.create({ name, occupation, catchPhrase })
    .then( () => {
      res.redirect('/celebrities');
      // res.send(req.body);
    })
    .catch( (err) => {
      next(err);
    });
});

// DELETE //
router.post('/celebrities/delete/:celebId', (req, res, next) => {
    Celebrity.findByIdAndRemove(req.body.id)
    .then( () => {
      res.redirect('/celebrities');
    })
    .catch( (err) => {
      next(err);
    });
});

// UPDATE Step #1 //
router.get('/celebrities/edit/:celebId', (req, res, next) => {
    Celebrity.findById(req.query.id)
    .then( (celebrities) => {
        res.locals.celebId = req.query.id;
        res.locals.celebrities = celebrities;
        res.render('celebrities/edit');
    })
    .catch( () => {
        next(err);
    });
});

// UPDATE Step #1 //
router.post('/celebrities/:celebId', (req, res, next) => {
    const { name, occupation, catchPhrase } = req.body;
    // res.send(req.body);
    Celebrity.findByIdAndUpdate(
        req.params.celebId,
        { name, occupation, catchPhrase },  
        { runValidators: true } 
    )
    .then( () => {
        res.redirect('/celebrities');
    })
    .catch( (err) => {
        next(err);
    });
});

// SHOW list //
router.get('/celebrities/:celebId', (req, res, next) => {
    Celebrity.findById(req.params.celebId)
    .then( (celebrities) => {
        res.locals.celebId = req.params.celebId;
        res.locals.celebrities = celebrities;
        res.render('celebrities/show');
    })
    .catch( () => {
        next(err);
    });
});





module.exports = router;
