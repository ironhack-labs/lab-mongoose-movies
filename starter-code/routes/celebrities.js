const express = require('express');
const router = express.Router();
const Celebs = require('../models/celebrity');

/* GET celebrities page */
router.get('/', (req, res, next) => {
    Celebs.find()
        .then((result) => {
            res.render('celebrities/index', {allCelebs: result});
        })
        .catch(err => next(err));
});

router.get('/:celeb_id/delete', (req, res, next) => {
    Celebs.findByIdAndRemove(req.params.celeb_id)
        .then(() => res.redirect('/celebrities'))
        .catch(err => next(err));
});

router.get('/create-new', (req, res, next) => {
    res.render('celebrities/create-new');
});

router.post('/create-new', (req, res, next) => {
    const {name, occupation, catchPhrase} = req.body;
    const newCelebrity = new Celebs ({ name, occupation, catchPhrase });

    newCelebrity.save()
    .then(() => res.redirect('/celebrities'))
    .catch(err => {
        console.log(`An error has occurred while adding a new celebrity: ${err}`)
        res.redirect('celebrities/new');
    });
});

router.get('/:celeb_id', (req, res, next) => {
    Celebs.findById(req.params.celeb_id)
        .then(result => {
            res.render('celebrities/show', {
                oneCeleb: result
            });
        })
        .catch(err => console.log(`An error has occurred while searching for the details: ${err}`))
});
// router.get('/celeb_id/delete', (req, res, next) => {
//     res.redirect('/celebrities/index');
// });




module.exports = router;