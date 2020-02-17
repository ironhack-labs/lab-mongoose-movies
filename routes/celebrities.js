const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity.model');

/* GET Celebrity list */
router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
      .then(celebritiesFromDB => {
        console.log('Celebrities from DB: ========', celebritiesFromDB);
        res.render('celebrities-views/index', {celebritiesFromDB});
      })
      .catch(err => console.log(`Error while pulling celebrities from DB: ${err}`));
});

/* GET Add new celebrity form */
router.get('/celebrities/new', (req, res, next) => {
    res.render('celebrities-views/new')
});

/* GET Celebrity details */
router.get('/celebrities/:id', (req, res, next) => {
    Celebrity.findById(req.params.id)
      .then(celebrityFromDB => {
        console.log('Celebrity from DB: ========', celebrityFromDB);
        res.render('celebrities-views/show', celebrityFromDB);
      })
      .catch(err => console.log(`Error while pulling celebrity details from DB: ${err}`));
});

/* GET Retrieve celebrity details */
router.get('/celebrities/:id/edit', (req, res, next) => {
    console.log("The form info: ", req.params.id);
    Celebrity.findById(req.params.id)
    .populate('celebrity')
    .then(celebrity => {
        res.render('celebrities-views/edit', celebrity)
    })
    .catch(err => {
        console.log(`Error while pulling celebrity details from DB: ${err}`);
    });
});

/* POST Add new celebrity to database */
router.post('/celebrities', (req, res, next) => {
    console.log("The form info: ", req.body);
    Celebrity.create(req.body)
    .then(celebrityFromDB => {
        console.log("New celebrity added to the list:", {celebrityFromDB})
        res.redirect('/celebrities');
    })
    .catch(err => {
        console.log(`Error while adding celebrity to DB: ${err}`);
        res.render('celebrities-views/new')

    });
});

/* POST Remove celebrity from database */
router.post('/celebrities/:id/delete', (req, res, next) => {
    console.log("The form info: ", req.params.id);
    Celebrity.findByIdAndRemove(req.params.id)
    .then(() => {
        res.redirect('/celebrities');
    })
    .catch(err => {
        console.log(`Error while removing celebrity from DB: ${err}`);
    });
});

/* POST Update celebrity on database */
router.post('/celebrities/:id/update', (req, res, next) => {
    console.log("The form info: ", req.body);
    Celebrity.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(() => {
      res.redirect('/celebrities')
    })
    .catch(err => {
        console.log(`Error while updating celebrity's details on DB: ${err}`)
    });
});

module.exports = router;