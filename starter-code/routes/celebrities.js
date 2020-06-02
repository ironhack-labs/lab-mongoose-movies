const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/celebrity');

/* GET celebrities page */
router.get('/', (req, res, next) => {
    Celebrity.find()
    .then(allCelebrities => {
        console.log(allCelebrities)
        res.render('celebrities/index', {celebrities: allCelebrities});
    })
    .catch(err => {
        console.log(('Error while searching for celebrities: ', err));
    });
});


router.get('/new', (req, res, next) => {
    res.render('celebrities/new');
})

router.post('/', (req, res, next) => {
    const {name, occupation, catchPhrase, photoUrl} = req.body;
    const newCelebrity = new Celebrity({name, occupation, catchPhrase, photoUrl});
    newCelebrity.save()
    .then(celebrity => {
        res.redirect('/celebrities')
    })
    .catch(err => {
        console.log(('Error while adding a new celebrities: ', err));
        res.redirect('/celebrities/new');
    })
});

router.get('/:id', (req, res, next) => {
    console.log(req.params.id);
    Celebrity.findById(req.params.id)
    .then(celebrity => {
        res.render('celebrities/show', {celebrity: celebrity});
    })
    .catch(err => {
        console.log(('Error while searching for celebrity data: ', err));
    });
});

router.post('/:id/delete', (req, res, next) => {
    Celebrity.findByIdAndRemove(req.params.id)
    .then(celebrity => res.redirect('/celebrities'))
    .catch(err => next(err));
});

router.get('/:id/edit', (req, res, next) => {
    Celebrity.findById(req.params.id)
    .then(celebrity => {
        console.log(celebrity)
        res.render('celebrities/edit', {celebrity});
    })
    .catch(err => next(err));
});

router.post('/:id', (req, res, next) => {
    Celebrity.findByIdAndUpdate(req.params.id, req.body) //1º id do objeto que será editado, 2º objeto com os novos dados. 
    .then(celebrity => res.redirect('/celebrities'))
    .catch(err => next(err));
});

module.exports = router;